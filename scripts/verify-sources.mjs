import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { sha256, validateSvg } from "./lib/icons.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const manifest = JSON.parse(await readFile(join(ROOT, "icons.manifest.json"), "utf8"));
const files = (await readdir(join(ROOT, "svg")))
  .filter((file) => file.endsWith(".svg"))
  .sort();

assert.equal(manifest.source.nodeId, "22:4", "manifest must use the canonical Icons frame");
assert.equal(manifest.iconCount, manifest.icons.length, "manifest count is inconsistent");
assert.equal(files.length, manifest.icons.length, "SVG and manifest counts differ");

for (const icon of manifest.icons) {
  const svg = await readFile(join(ROOT, icon.file), "utf8");
  validateSvg(svg, icon.file);
  assert.equal(sha256(svg), icon.sha256, `${icon.file} does not match its manifest hash`);
  assert.doesNotMatch(
    svg,
    /(?:fill|stroke)="(?!none|currentColor|url\()[^"]+"/,
    `${icon.file} contains a fixed paint color`,
  );
}

console.log(`Verified ${manifest.icons.length} canonical SVG sources.`);
