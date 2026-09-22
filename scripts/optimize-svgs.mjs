import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { optimizeSvg } from "./lib/icons.mjs";

const SVG_DIR = new URL("../svg", import.meta.url).pathname;

async function main() {
  const files = (await readdir(SVG_DIR)).filter((f) => f.endsWith(".svg"));
  console.log(`Optimizing ${files.length} SVGs...`);
  for (const file of files) {
    const p = join(SVG_DIR, file);
    const raw = await readFile(p, "utf-8");
    await writeFile(p, optimizeSvg(raw, p), "utf-8");
  }
  console.log("Done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
