import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { sha256, validateSvg } from "./lib/icons.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const manifest = JSON.parse(await readFile(join(ROOT, "icons.manifest.json"), "utf8"));
const files = (await readdir(join(ROOT, "svg")))
  .filter((file) => file.endsWith(".svg"))
  .sort();

assert(
  manifest.schemaVersion === 1 || manifest.schemaVersion === 2,
  `unsupported manifest schema ${manifest.schemaVersion}`,
);
assert.equal(manifest.source.nodeId, "22:4", "manifest must use the canonical Icons frame");
assert.equal(manifest.iconCount, manifest.icons.length, "manifest count is inconsistent");
assert.equal(files.length, manifest.icons.length, "SVG and manifest counts differ");

const ids = new Set();
const manifestFiles = new Set();

for (const icon of manifest.icons) {
  if (manifest.schemaVersion === 2) {
    assert.match(icon.sourceSha256, /^[a-f0-9]{64}$/, `${icon.file} has no source hash`);
  }
  assert(!ids.has(icon.id), `duplicate Figma node ID ${icon.id}`);
  assert(!manifestFiles.has(icon.file), `duplicate manifest file ${icon.file}`);
  ids.add(icon.id);
  manifestFiles.add(icon.file);
  const svg = await readFile(join(ROOT, icon.file), "utf8");
  validateSvg(svg, icon.file);
  assert.equal(sha256(svg), icon.sha256, `${icon.file} does not match its manifest hash`);
  assert.doesNotMatch(
    svg,
    /(?:fill|stroke)="(?!none|currentColor|url\()[^"]+"/,
    `${icon.file} contains a fixed paint color`,
  );
}

if (manifest.schemaVersion === 1) {
  console.warn("Manifest schema 1 is valid for migration; the next sync will fully render schema 2.");
}

assert.deepEqual(
  files,
  [...manifestFiles].map((file) => file.replace(/^svg\//, "")).sort(),
  "SVG directory contains files outside the manifest",
);

console.log(`Verified ${manifest.icons.length} canonical SVG sources.`);
