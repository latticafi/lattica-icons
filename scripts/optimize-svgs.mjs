import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { optimize } from "svgo";

const SVG_DIR = new URL("../svg", import.meta.url).pathname;

const config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: { overrides: { removeViewBox: false } },
    },
    { name: "removeDimensions" },
    {
      name: "removeAttrs",
      params: { attrs: ["xml:space", "data-name"] },
    },
    {
      name: "replaceColors",
      type: "visitor",
      fn() {
        return {
          element: {
            enter(node) {
              for (const attr of ["stroke", "fill"]) {
                const v = node.attributes[attr];
                if (v && v !== "none" && !v.startsWith("url(")) {
                  node.attributes[attr] = "currentColor";
                }
              }
            },
          },
        };
      },
    },
    {
      name: "normalizeStrokes",
      type: "visitor",
      fn() {
        return {
          element: {
            enter(node) {
              if (node.attributes["stroke-linecap"])
                node.attributes["stroke-linecap"] = "round";
              if (node.attributes["stroke-linejoin"])
                node.attributes["stroke-linejoin"] = "round";
            },
          },
        };
      },
    },
  ],
};

async function main() {
  const files = (await readdir(SVG_DIR)).filter((f) => f.endsWith(".svg"));
  console.log(`Optimizing ${files.length} SVGs...`);
  for (const file of files) {
    const p = join(SVG_DIR, file);
    const raw = await readFile(p, "utf-8");
    const result = optimize(raw, { ...config, path: p });
    await writeFile(p, result.data, "utf-8");
  }
  console.log("Done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
