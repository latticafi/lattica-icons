import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { pathToFileURL } from "node:url";
import {
  optimizeSvg,
  sha256,
  toKebab,
  toPascalCase,
  validateSvg,
} from "./lib/icons.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const SVG_DIR = join(ROOT, "svg");
const MANIFEST_PATH = join(ROOT, "icons.manifest.json");
const API = "https://api.figma.com/v1";
const DEFAULT_NODE_ID = "22:4";
const DEFAULT_BATCH_SIZE = 50;
const DEFAULT_DOWNLOAD_CONCURRENCY = 10;
const DEFAULT_REQUEST_INTERVAL_MS = 6_500;
const DEFAULT_MAX_ATTEMPTS = 6;

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

function retryDelay(response, attempt) {
  const retryAfter = response?.headers.get("retry-after");
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds)) return seconds * 1_000;
    const timestamp = Date.parse(retryAfter);
    if (Number.isFinite(timestamp)) return Math.max(timestamp - Date.now(), 0);
  }
  return Math.min(1_000 * 2 ** (attempt - 1), 30_000);
}

export async function fetchWithRetry(url, options = {}, config = {}) {
  const maxAttempts = config.maxAttempts ?? DEFAULT_MAX_ATTEMPTS;
  const fetchImpl = config.fetchImpl ?? fetch;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetchImpl(url, options);
      if (response.ok) return response;

      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === maxAttempts) {
        const body = (await response.text()).slice(0, 300);
        throw new Error(
          `HTTP ${response.status} ${response.statusText}${body ? `: ${body}` : ""}`,
        );
      }
      await sleep(retryDelay(response, attempt));
    } catch (error) {
      if (attempt === maxAttempts || /^HTTP 4(?!29)/.test(error.message)) throw error;
      await sleep(Math.min(1_000 * 2 ** (attempt - 1), 30_000));
    }
  }
  throw new Error(`Request failed after ${maxAttempts} attempts`);
}

export function collectComponents(node, ancestors = [], output = []) {
  const path = [...ancestors, node.name].filter(Boolean);
  if (node.type === "COMPONENT") {
    const fileName = toKebab(node.name);
    output.push({
      id: node.id,
      sourceName: node.name,
      sourcePath: path.join(" / "),
      fileName,
      exportName: toPascalCase(fileName),
    });
  }
  for (const child of node.children ?? []) collectComponents(child, path, output);
  return output;
}

export function assertUniqueNames(components) {
  for (const key of ["fileName", "exportName"]) {
    const seen = new Map();
    for (const component of components) {
      const previous = seen.get(component[key]);
      if (previous) {
        throw new Error(
          `Name collision for ${key} "${component[key]}": ` +
            `"${previous.sourcePath}" and "${component.sourcePath}"`,
        );
      }
      if (!component[key]) {
        throw new Error(`Icon "${component.sourcePath}" normalizes to an empty name`);
      }
      seen.set(component[key], component);
    }
  }
}

function chunk(values, size) {
  return Array.from({ length: Math.ceil(values.length / size) }, (_, index) =>
    values.slice(index * size, (index + 1) * size),
  );
}

async function pathExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function previousIconCount() {
  try {
    const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
    return manifest.icons.length;
  } catch {
    try {
      return (await readdir(SVG_DIR)).filter((file) => file.endsWith(".svg")).length;
    } catch {
      return 0;
    }
  }
}

export function assertSafeCount(previous, next, allowRemoval, limit = 10) {
  if (!previous || next >= previous || allowRemoval) return;
  const removedPercent = ((previous - next) / previous) * 100;
  if (removedPercent > limit) {
    throw new Error(
      `Refusing to remove ${previous - next} icons (${removedPercent.toFixed(1)}%). ` +
        "Set FIGMA_ALLOW_ICON_REMOVAL=true after reviewing the Figma change.",
    );
  }
}

async function replaceSources(stagedDirectory, stagedManifest) {
  const svgBackup = `${SVG_DIR}.backup-${process.pid}`;
  const manifestBackup = `${MANIFEST_PATH}.backup-${process.pid}`;
  const hadSvg = await pathExists(SVG_DIR);
  const hadManifest = await pathExists(MANIFEST_PATH);
  if (hadSvg) await rename(SVG_DIR, svgBackup);
  if (hadManifest) await rename(MANIFEST_PATH, manifestBackup);
  try {
    await rename(stagedDirectory, SVG_DIR);
    await rename(stagedManifest, MANIFEST_PATH);
    if (hadSvg) await rm(svgBackup, { recursive: true, force: true });
    if (hadManifest) await rm(manifestBackup, { force: true });
  } catch (error) {
    await rm(SVG_DIR, { recursive: true, force: true });
    await rm(MANIFEST_PATH, { force: true });
    if (hadSvg) await rename(svgBackup, SVG_DIR);
    if (hadManifest) await rename(manifestBackup, MANIFEST_PATH);
    throw error;
  }
}

async function api(path, token) {
  const response = await fetchWithRetry(`${API}${path}`, {
    headers: { "X-Figma-Token": token },
  });
  return response.json();
}

export async function exportIcons({
  token = process.env.FIGMA_TOKEN,
  fileKey = process.env.FIGMA_FILE_KEY,
  nodeId = process.env.FIGMA_ICON_NODE_ID ?? DEFAULT_NODE_ID,
  batchSize = Number(process.env.FIGMA_BATCH_SIZE ?? DEFAULT_BATCH_SIZE),
  downloadConcurrency = Number(
    process.env.FIGMA_DOWNLOAD_CONCURRENCY ?? DEFAULT_DOWNLOAD_CONCURRENCY,
  ),
  requestIntervalMs = Number(
    process.env.FIGMA_REQUEST_INTERVAL_MS ?? DEFAULT_REQUEST_INTERVAL_MS,
  ),
} = {}) {
  if (!token || !fileKey) throw new Error("Missing FIGMA_TOKEN or FIGMA_FILE_KEY");

  console.log(`Fetching canonical Figma frame ${nodeId}...`);
  const file = await api(
    `/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`,
    token,
  );
  const root = file.nodes?.[nodeId]?.document;
  if (!root) throw new Error(`Figma node ${nodeId} was not found`);

  const components = collectComponents(root).sort((a, b) =>
    a.exportName.localeCompare(b.exportName),
  );
  if (!components.length) throw new Error(`Figma node ${nodeId} contains no components`);
  assertUniqueNames(components);
  assertSafeCount(
    await previousIconCount(),
    components.length,
    process.env.FIGMA_ALLOW_ICON_REMOVAL === "true",
    Number(process.env.FIGMA_MAX_REMOVAL_PERCENT ?? 10),
  );
  console.log(`Found ${components.length} unique components.`);

  const stagingRoot = await mkdtemp(join(tmpdir(), "lattica-icons-"));
  const stagedSvg = join(stagingRoot, "svg");
  await mkdir(stagedSvg);
  const manifestIcons = [];

  try {
    const batches = chunk(components, batchSize);
    for (let index = 0; index < batches.length; index++) {
      const batch = batches[index];
      console.log(`Exporting batch ${index + 1}/${batches.length}...`);
      const ids = batch.map(({ id }) => id).join(",");
      const params = new URLSearchParams({ ids, format: "svg" });
      if (file.version) params.set("version", file.version);
      const images = await api(`/images/${fileKey}?${params}`, token);

      for (const downloadGroup of chunk(batch, downloadConcurrency)) {
        const entries = await Promise.all(
          downloadGroup.map(async (component) => {
            const url = images.images?.[component.id];
            if (!url) throw new Error(`${component.sourcePath}: Figma returned no image URL`);
            const response = await fetchWithRetry(url);
            const contentType = response.headers.get("content-type") ?? "";
            if (contentType && !contentType.includes("svg") && !contentType.includes("xml")) {
              throw new Error(`${component.sourcePath}: unexpected content type ${contentType}`);
            }
            const source = await response.text();
            validateSvg(source, component.sourcePath);
            const svg = optimizeSvg(source, `${component.fileName}.svg`);
            validateSvg(svg, component.sourcePath);
            await writeFile(join(stagedSvg, `${component.fileName}.svg`), svg, "utf8");
            return {
              id: component.id,
              sourceName: component.sourceName,
              sourcePath: component.sourcePath,
              exportName: component.exportName,
              file: `svg/${component.fileName}.svg`,
              sha256: sha256(svg),
            };
          }),
        );
        manifestIcons.push(...entries);
      }
      if (index < batches.length - 1) await sleep(requestIntervalMs);
    }

    if (manifestIcons.length !== components.length) {
      throw new Error(`Expected ${components.length} icons, exported ${manifestIcons.length}`);
    }
    const manifest = {
      schemaVersion: 1,
      source: {
        provider: "figma",
        fileKey,
        nodeId,
        fileName: file.name,
        fileVersion: file.version,
        lastModified: file.lastModified,
      },
      iconCount: manifestIcons.length,
      icons: manifestIcons,
    };
    const stagedManifest = join(stagingRoot, basename(MANIFEST_PATH));
    await writeFile(stagedManifest, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

    await replaceSources(stagedSvg, stagedManifest);
    console.log(`Done. Exported ${manifestIcons.length} icons from ${nodeId}.`);
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  exportIcons().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
