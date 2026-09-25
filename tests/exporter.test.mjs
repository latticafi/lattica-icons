import assert from "node:assert/strict";
import test from "node:test";
import {
  assertSafeCount,
  assertUniqueNames,
  collectComponents,
  componentSourceHash,
  fetchWithRetry,
  planComponentSync,
} from "../scripts/export-figma-icons.mjs";
import { optimizeSvg, toKebab, toPascalCase, validateSvg } from "../scripts/lib/icons.mjs";

test("normalizes Figma names consistently", () => {
  assert.equal(toKebab("Arrow / Down_Left"), "arrow-down-left");
  assert.equal(toPascalCase("arrow-down-left"), "ArrowDownLeft");
});

test("collects only component descendants with source paths", () => {
  const components = collectComponents({
    type: "FRAME",
    name: "Icons",
    children: [
      {
        type: "FRAME",
        name: "Arrows",
        children: [{ type: "COMPONENT", id: "1:2", name: "arrow-down" }],
      },
      { type: "INSTANCE", id: "1:3", name: "ignored" },
    ],
  });
  assert.deepEqual(components, [
    {
      id: "1:2",
      sourceName: "arrow-down",
      sourcePath: "Icons / Arrows / arrow-down",
      fileName: "arrow-down",
      exportName: "ArrowDown",
      sourceSha256: componentSourceHash({
        type: "COMPONENT",
        id: "1:2",
        name: "arrow-down",
      }),
    },
  ]);
});

test("source fingerprints ignore IDs, names, and root placement", () => {
  const base = {
    type: "COMPONENT",
    id: "1:2",
    name: "search",
    absoluteBoundingBox: { x: 100, y: 200, width: 24, height: 24 },
    relativeTransform: [[1, 0, 100], [0, 1, 200]],
    children: [
      {
        id: "1:3",
        name: "path",
        type: "VECTOR",
        relativeTransform: [[1, 0, 2], [0, 1, 3]],
        fillGeometry: [{ path: "M0 0L1 1", windingRule: "NONZERO" }],
      },
    ],
  };
  const moved = structuredClone(base);
  moved.id = "9:9";
  moved.name = "search-renamed";
  moved.absoluteBoundingBox.x = 900;
  moved.relativeTransform[0][2] = 900;
  assert.equal(componentSourceHash(base), componentSourceHash(moved));

  moved.children[0].relativeTransform[0][2] = 4;
  assert.notEqual(componentSourceHash(base), componentSourceHash(moved));
});

test("source fingerprints detect vector geometry changes", () => {
  const first = {
    type: "COMPONENT",
    children: [{ type: "VECTOR", fillGeometry: [{ path: "M0 0L1 1" }] }],
  };
  const second = structuredClone(first);
  second.children[0].fillGeometry[0].path = "M0 0L2 2";
  assert.notEqual(componentSourceHash(first), componentSourceHash(second));
});

test("plans incremental renders, metadata reuse, and removals", () => {
  const components = [
    {
      id: "1", sourceName: "same", sourcePath: "Icons / same",
      exportName: "Same", fileName: "same", sourceSha256: "a",
    },
    {
      id: "2", sourceName: "renamed", sourcePath: "Icons / renamed",
      exportName: "Renamed", fileName: "renamed", sourceSha256: "b",
    },
    {
      id: "3", sourceName: "changed", sourcePath: "Icons / changed",
      exportName: "Changed", fileName: "changed", sourceSha256: "new",
    },
    {
      id: "4", sourceName: "new", sourcePath: "Icons / new",
      exportName: "New", fileName: "new", sourceSha256: "d",
    },
  ];
  const previous = {
    schemaVersion: 2,
    icons: [
      {
        id: "1", sourceName: "same", sourcePath: "Icons / same",
        exportName: "Same", file: "svg/same.svg", sourceSha256: "a",
      },
      {
        id: "2", sourceName: "old", sourcePath: "Icons / old",
        exportName: "Old", file: "svg/old.svg", sourceSha256: "b",
      },
      {
        id: "3", sourceName: "changed", sourcePath: "Icons / changed",
        exportName: "Changed", file: "svg/changed.svg", sourceSha256: "old",
      },
      {
        id: "5", sourceName: "removed", sourcePath: "Icons / removed",
        exportName: "Removed", file: "svg/removed.svg", sourceSha256: "e",
      },
    ],
  };
  const plan = planComponentSync(components, previous);
  assert.deepEqual(plan.items.map(({ action, reason }) => [action, reason]), [
    ["reuse", "unchanged"],
    ["reuse", "renamed"],
    ["render", "changed"],
    ["render", "new"],
  ]);
  assert.deepEqual(plan.removed.map(({ id }) => id), ["5"]);
});

test("forces a full render when migrating an older manifest", () => {
  const plan = planComponentSync(
    [{ id: "1", sourceSha256: "a" }],
    { schemaVersion: 1, icons: [{ id: "1", sourceSha256: "a" }] },
  );
  assert.equal(plan.migrationRequired, true);
  assert.deepEqual(plan.items.map(({ reason }) => reason), ["manifest-migration"]);
});

test("rejects normalized name collisions", () => {
  assert.throws(
    () =>
      assertUniqueNames([
        { fileName: "arrow-down", exportName: "ArrowDown", sourcePath: "A" },
        { fileName: "arrow-down", exportName: "ArrowDown", sourcePath: "B" },
      ]),
    /Name collision/,
  );
});

test("guards against unexpectedly large removals", () => {
  assert.doesNotThrow(() => assertSafeCount(100, 95, false, 10));
  assert.throws(() => assertSafeCount(100, 80, false, 10), /Refusing to remove 20 icons/);
  assert.doesNotThrow(() => assertSafeCount(100, 80, true, 10));
});

test("retries rate limits and honors a zero Retry-After", async () => {
  let calls = 0;
  const response = await fetchWithRetry("https://example.test", {}, {
    maxAttempts: 2,
    fetchImpl: async () => {
      calls++;
      return calls === 1
        ? new Response("slow down", {
            status: 429,
            headers: { "retry-after": "0" },
          })
        : new Response("ok");
    },
  });
  assert.equal(await response.text(), "ok");
  assert.equal(calls, 2);
});

test("normalizes monochrome SVG paint to currentColor", () => {
  const svg = optimizeSvg(
    '<svg viewBox="0 0 24 24"><path fill="#123456" stroke="rgb(1 2 3)" d="M0 0h1"/></svg>',
  );
  validateSvg(svg, "sample");
  assert.match(svg, /fill="currentColor"/);
  assert.match(svg, /stroke="currentColor"/);
});
