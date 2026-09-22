import { readFile, readdir } from "node:fs/promises";

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const expectedTag = `v${packageJson.version}`;
const actualTag = process.env.GITHUB_REF_NAME;

if (actualTag !== expectedTag) {
  throw new Error(
    `Release tag ${actualTag ?? "<missing>"} does not match package version ${expectedTag}`
  );
}

const pendingChangesets = (await readdir(".changeset"))
  .filter((file) => file.endsWith(".md") && file !== "README.md");
if (pendingChangesets.length) {
  throw new Error(
    `Release has unapplied changesets: ${pendingChangesets.join(", ")}`,
  );
}

console.log(`Release tag ${actualTag} matches package version ${packageJson.version}.`);
