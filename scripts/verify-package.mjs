import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { PassThrough } from "node:stream";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToPipeableStream, renderToStaticMarkup } from "react-dom/server";

const packageJson = JSON.parse(
  await (await import("node:fs/promises")).readFile(new URL("../package.json", import.meta.url), "utf8"),
);
const esm = await import(new URL("../dist/index.js", import.meta.url));
const catalog = await import(new URL("../dist/catalog.js", import.meta.url));
const { default: Icon } = await import(new URL("../dist/Icon.js", import.meta.url));
const require = createRequire(import.meta.url);
const cjs = require("../dist/index.cjs");

assert.ok(catalog.iconNames.length > 0, "catalog is empty");
const name = catalog.iconNames[0];
assert.equal(typeof esm[name], "object", `ESM export ${name} is missing`);
assert.equal(typeof cjs[name], "object", `CJS export ${name} is missing`);
assert.equal(esm.Icon, undefined, "dynamic Icon must not be exported from the root entry");

const decorative = renderToStaticMarkup(
  React.createElement(esm[name], { color: "rebeccapurple" }),
);
assert.match(decorative, /aria-hidden="true"/);
assert.match(decorative, /color="rebeccapurple"/);
assert.match(decorative, /currentColor/);

const meaningful = renderToStaticMarkup(
  React.createElement(esm[name], {
    "aria-hidden": false,
    "aria-label": "Sample icon",
    role: "img",
  }),
);
assert.doesNotMatch(meaningful, /aria-hidden="true"/);
assert.match(meaningful, /aria-label="Sample icon"/);

const lazyMarkup = await new Promise((resolve, reject) => {
  let output = "";
  const destination = new PassThrough();
  destination.setEncoding("utf8");
  destination.on("data", (chunk) => (output += chunk));
  destination.on("end", () => resolve(output));
  destination.on("error", reject);
  const stream = renderToPipeableStream(React.createElement(Icon, { name }), {
    onAllReady() {
      stream.pipe(destination);
    },
    onError: reject,
  });
});
assert.match(lazyMarkup, /<svg/);

const pack = JSON.parse(
  execFileSync("npm", ["pack", "--dry-run", "--json"], {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
    env: {
      ...process.env,
      npm_config_cache: join(tmpdir(), "lattica-icons-npm-cache"),
    },
  }),
)[0];
assert.ok(pack.files.some(({ path }) => path === "dist/index.js"));
assert.ok(pack.files.some(({ path }) => path === "dist/Icon.js"));
assert.ok(!pack.files.some(({ path }) => path.startsWith("src/") || path.startsWith("svg/")));

for (const entry of [".", "./Icon", "./catalog"]) {
  assert.ok(packageJson.exports[entry], `package export ${entry} is missing`);
}

execFileSync(
  fileURLToPath(new URL("../node_modules/.bin/tsc", import.meta.url)),
  ["--project", fileURLToPath(new URL("../tests/tsconfig.json", import.meta.url))],
  { stdio: "inherit" },
);

console.log(
  `Verified ${catalog.iconNames.length} icons across types, ESM, CJS, lazy loading, and package contents.`,
);
