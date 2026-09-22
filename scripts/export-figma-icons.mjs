import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const SVG_DIR = new URL("../svg", import.meta.url).pathname;
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
  console.error("Missing env vars: FIGMA_TOKEN and FIGMA_FILE_KEY");
  process.exit(1);
}

const API = "https://api.figma.com/v1";

function toKebab(name) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_/]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .toLowerCase();
}

async function api(path) {
  const r = await fetch(`${API}${path}`, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  if (!r.ok) throw new Error(`Figma API ${r.status}: ${r.statusText}`);
  return r.json();
}

function collectComponents(node, out = []) {
  if (node.type === "COMPONENT") out.push({ id: node.id, name: node.name });
  if (node.children) for (const c of node.children) collectComponents(c, out);
  return out;
}

function chunk(arr, n) {
  const r = [];
  for (let i = 0; i < arr.length; i += n) r.push(arr.slice(i, i + n));
  return r;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await mkdir(SVG_DIR, { recursive: true });

  console.log("Fetching Figma file tree...");
  const file = await api(`/files/${FIGMA_FILE_KEY}`);
  const components = collectComponents(file.document);
  console.log(`Found ${components.length} components.`);

  if (!components.length) return;

  const batches = chunk(components, 50);
  let ok = 0, fail = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const ids = batch.map((c) => c.id).join(",");
    console.log(`Batch ${i + 1}/${batches.length}: ${batch.length} icons...`);

    try {
      const data = await api(
        `/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg`
      );
      for (const c of batch) {
        const url = data.images?.[c.id];
        if (!url) { fail++; continue; }
        try {
          const svg = await (await fetch(url)).text();
          await writeFile(join(SVG_DIR, `${toKebab(c.name)}.svg`), svg, "utf-8");
          ok++;
        } catch { fail++; }
      }
    } catch (err) {
      console.error(`  Batch failed: ${err.message}`);
      fail += batch.length;
    }

    if (i < batches.length - 1) await sleep(1000);
  }

  console.log(`\nDone: ${ok} exported, ${fail} errors.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
