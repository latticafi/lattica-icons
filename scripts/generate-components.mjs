import { readdir, readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { transform } from "@svgr/core";

const ROOT = new URL("..", import.meta.url).pathname;
const SVG_DIR = join(ROOT, "svg");
const ICONS_DIR = join(ROOT, "src", "icons");
const SRC = join(ROOT, "src");

function toPascalCase(s) {
  return s.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

const svgrConfig = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  typescript: true,
  ref: true,
  svgProps: { "aria-hidden": "true", width: "{size}", height: "{size}" },
  replaceAttrValues: {
    "#000": "currentColor",
    "#000000": "currentColor",
    "#B0B8C7": "currentColor",
    "#b0b8c7": "currentColor",
    black: "currentColor",
  },
  svgoConfig: {
    plugins: [
      { name: "preset-default", params: { overrides: { removeViewBox: false } } },
      { name: "removeDimensions" },
    ],
  },
  template(variables, { tpl }) {
    return tpl`
import { forwardRef, type SVGProps, type Ref } from "react";

const ${variables.componentName} = forwardRef(
  ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => (
    ${variables.jsx}
  )
);

${variables.componentName}.displayName = "${variables.componentName}";

export default ${variables.componentName};
`;
  },
};

async function main() {
  await rm(ICONS_DIR, { recursive: true, force: true });
  await mkdir(ICONS_DIR, { recursive: true });

  const files = (await readdir(SVG_DIR)).filter((f) => f.endsWith(".svg")).sort();
  console.log(`Generating ${files.length} React components...`);

  const icons = [];
  for (const file of files) {
    const base = file.replace(/\.svg$/, "");
    const name = toPascalCase(base);
    const svg = await readFile(join(SVG_DIR, file), "utf-8");
    let code = await transform(svg, { ...svgrConfig, componentName: name });
    code = code.replace(/SvgComponent/g, name);
    await writeFile(join(ICONS_DIR, `${name}.tsx`), code, "utf-8");
    icons.push({ base, name });
  }

  // Barrel: src/index.ts
  const index = [
    "// Auto-generated — do not edit",
    'export { default as Icon } from "./Icon";',
    'export type { IconName } from "./icon-names";',
    'export { iconNames } from "./icon-names";',
    "",
    ...icons.map(({ name }) => `export { default as ${name} } from "./icons/${name}";`),
    "",
  ].join("\n");
  await writeFile(join(SRC, "index.ts"), index, "utf-8");

  // Icon names: src/icon-names.ts
  const names = [
    "// Auto-generated — do not edit",
    "export const iconNames = [",
    icons.map(({ name }) => `  "${name}"`).join(",\n"),
    "] as const;",
    "",
    "export type IconName = (typeof iconNames)[number];",
    "",
  ].join("\n");
  await writeFile(join(SRC, "icon-names.ts"), names, "utf-8");

  console.log(`Done. ${icons.length} components generated.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
