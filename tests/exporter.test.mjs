import assert from "node:assert/strict";
import test from "node:test";
import {
  assertSafeCount,
  assertUniqueNames,
  collectComponents,
  fetchWithRetry,
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
    },
  ]);
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
