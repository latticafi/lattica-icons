import { createHash } from "node:crypto";
import { optimize } from "svgo";

export function toKebab(name) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_/]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export function toPascalCase(name) {
  return name
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function optimizeSvg(svg, path = undefined) {
  return optimize(svg, {
    path,
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
                for (const attribute of ["stroke", "fill"]) {
                  const value = node.attributes[attribute];
                  if (value && value !== "none" && !value.startsWith("url(")) {
                    node.attributes[attribute] = "currentColor";
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
  }).data;
}

export function validateSvg(svg, name) {
  if (!/^\s*<svg\b/i.test(svg)) {
    throw new Error(`${name}: response is not an SVG document`);
  }
  if (!/\bviewBox=("[^"]+"|'[^']+')/i.test(svg)) {
    throw new Error(`${name}: SVG is missing a viewBox`);
  }
}
