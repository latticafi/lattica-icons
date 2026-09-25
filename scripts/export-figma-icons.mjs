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
const MANIFEST_SCHEMA_VERSION = 2;

const SOURCE_HASH_OMITTED_KEYS = new Set([
  "absoluteBoundingBox",
  "absoluteRenderBounds",
  "annotations",
  "description",
  "devStatus",
  "documentationLinks",
  "id",
  "interactions",
  "name",
]);

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

function normalizeSourceValue(value, { root = false } = {}) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeSourceValue(item));
  }
  if (!value || typeof value !== "object") return value;

  return Object.fromEntries(
    Object.keys(value)
      .filter((key) => !SOURCE_HASH_OMITTED_KEYS.has(key))
      .sort()
      .map((key) => {
        let normalized = normalizeSourceValue(value[key]);
        if (root && key === "relativeTransform" && Array.isArray(normalized)) {
          normalized = normalized.map((row, rowIndex) =>
            Array.isArray(row)
              ? row.map((entry, columnIndex) =>
                  columnIndex === 2 && rowIndex < 2 ? 0 : entry,
                )
              : row,
          );
        }
        return [key, normalized];
      }),
  );
}

export function componentSourceHash(node) {
  return sha256(JSON.stringify(normalizeSourceValue(node, { root: true })));
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
      sourceSha256: componentSourceHash(node),
    });
  }
  for (const child of node.children ?? []) collectComponents(child, path, output);
  return output;
}

export function planComponentSync(components, previousManifest, { full = false } = {}) {
  const previousIcons = previousManifest?.icons ?? [];
  const previousById = new Map(previousIcons.map((icon) => [icon.id, icon]));
  const migrationRequired = previousManifest?.schemaVersion !== MANIFEST_SCHEMA_VERSION;
  const forceRender = full || migrationRequired;
  const items = components.map((component) => {
    const previous = previousById.get(component.id);
    previousById.delete(component.id);

    if (forceRender) {
      return {
        action: "render",
        reason: full ? "full" : "manifest-migration",
        component,
        previous,
      };
    }
    if (!previous) return { action: "render", reason: "new", component };
    if (previous.sourceSha256 !== component.sourceSha256) {
      return { action: "render", reason: "changed", component, previous };
    }

    const currentFile = `svg/${component.fileName}.svg`;
    const metadataChanged =
      previous.sourceName !== component.sourceName ||
      previous.sourcePath !== component.sourcePath ||
      previous.exportName !== component.exportName ||
      previous.file !== currentFile;
    return {
      action: "reuse",
      reason: metadataChanged ? "renamed" : "unchanged",
      component,
      previous,
    };
  });

  return {
    items,
    removed: [...previousById.values()],
    migrationRequired,
  };
}

export function assertUniqueNames(components) {
  for (const key of ["fileName", "exportName"]) {
    const seen = new Map();
    for (const component of components) {
      const previous = seen.get(component[key]);
      if (previous) {
        throw new Error(
          `Name collision for ${key} "${component[key]}": ` +
            `"${previous.sourcePath}" (${previous.id}) and ` +
            `"${component.sourcePath}" (${component.id})`,
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

async function readPreviousManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw new Error(`Could not read ${basename(MANIFEST_PATH)}: ${error.message}`);
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

function manifestEntry(component, contentSha256) {
  return {
    id: component.id,
    sourceName: component.sourceName,
    sourcePath: component.sourcePath,
    exportName: component.exportName,
    file: `svg/${component.fileName}.svg`,
    sourceSha256: component.sourceSha256,
    sha256: contentSha256,
  };
}

async function reuseIcon(item, stagedSvg) {
  if (
    typeof item.previous?.file !== "string" ||
    item.previous.file !== `svg/${basename(item.previous.file)}` ||
    typeof item.previous.sha256 !== "string"
  ) {
    return null;
  }
  try {
    const source = await readFile(join(ROOT, item.previous.file), "utf8");
    validateSvg(source, item.previous.file);
    if (sha256(source) !== item.previous.sha256) return null;
    await writeFile(join(stagedSvg, `${item.component.fileName}.svg`), source, "utf8");
    return manifestEntry(item.component, item.previous.sha256);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
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
  full = process.env.FIGMA_FULL_SYNC === "true",
} = {}) {
  if (!token || !fileKey) throw new Error("Missing FIGMA_TOKEN or FIGMA_FILE_KEY");

  console.log(`Fetching canonical Figma frame ${nodeId}...`);
  const file = await api(
    `/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}&geometry=paths`,
    token,
  );
  const root = file.nodes?.[nodeId]?.document;
  if (!root) throw new Error(`Figma node ${nodeId} was not found`);

  const components = collectComponents(root).sort((a, b) =>
    a.exportName.localeCompare(b.exportName),
  );
  if (!components.length) throw new Error(`Figma node ${nodeId} contains no components`);
  assertUniqueNames(components);
  const previousManifest = await readPreviousManifest();
  assertSafeCount(
    previousManifest?.icons?.length ?? (await previousIconCount()),
    components.length,
    process.env.FIGMA_ALLOW_ICON_REMOVAL === "true",
    Number(process.env.FIGMA_MAX_REMOVAL_PERCENT ?? 10),
  );
  console.log(`Found ${components.length} unique components.`);

  const plan = planComponentSync(components, previousManifest, { full });
  const counts = plan.items.reduce((result, item) => {
    result[item.reason] = (result[item.reason] ?? 0) + 1;
    return result;
  }, {});
  const renderCount = plan.items.filter((item) => item.action === "render").length;
  if (plan.migrationRequired && !full) {
    console.log("Manifest fingerprints are missing or outdated; running one full migration sync.");
  }
  console.log(
    `Plan: ${counts.new ?? 0} new, ${counts.changed ?? 0} changed, ` +
      `${counts.renamed ?? 0} renamed, ${counts.unchanged ?? 0} unchanged, ` +
      `${plan.removed.length} removed, ${renderCount} to render` +
      `${full ? ", full reconciliation requested" : ""}.`,
  );

  const stagingRoot = await mkdtemp(join(tmpdir(), "lattica-icons-"));
  const stagedSvg = join(stagingRoot, "svg");
  await mkdir(stagedSvg);
  const manifestIcons = new Map();

  try {
    const renderItems = [];
    for (const item of plan.items) {
      if (item.action === "render") {
        renderItems.push(item);
        continue;
      }
      const entry = await reuseIcon(item, stagedSvg);
      if (entry) manifestIcons.set(item.component.id, entry);
      else renderItems.push({ ...item, action: "render", reason: "invalid-cache" });
    }

    if (renderItems.some((item) => item.reason === "invalid-cache")) {
      console.log("Some cached SVGs were missing or invalid; rendering them again.");
    }

    const batches = chunk(renderItems, batchSize);
    for (let index = 0; index < batches.length; index++) {
      const batch = batches[index];
      console.log(`Rendering batch ${index + 1}/${batches.length}...`);
      const ids = batch.map(({ component }) => component.id).join(",");
      const params = new URLSearchParams({ ids, format: "svg" });
      if (file.version) params.set("version", file.version);
      const images = await api(`/images/${fileKey}?${params}`, token);

      for (const downloadGroup of chunk(batch, downloadConcurrency)) {
        const entries = await Promise.all(
          downloadGroup.map(async ({ component }) => {
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
            return manifestEntry(component, sha256(svg));
          }),
        );
        for (const entry of entries) manifestIcons.set(entry.id, entry);
      }
      if (index < batches.length - 1) await sleep(requestIntervalMs);
    }

    if (manifestIcons.size !== components.length) {
      throw new Error(`Expected ${components.length} icons, staged ${manifestIcons.size}`);
    }
    const orderedIcons = components.map((component) => manifestIcons.get(component.id));
    const manifest = {
      schemaVersion: MANIFEST_SCHEMA_VERSION,
      source: {
        provider: "figma",
        fileKey,
        nodeId,
        fileName: file.name,
        fileVersion: file.version,
        lastModified: file.lastModified,
      },
      iconCount: orderedIcons.length,
      icons: orderedIcons,
    };
    const stagedManifest = join(stagingRoot, basename(MANIFEST_PATH));
    await writeFile(stagedManifest, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

    await replaceSources(stagedSvg, stagedManifest);
    console.log(
      `Done. Staged ${orderedIcons.length} icons from ${nodeId}; rendered ${renderItems.length}.`,
    );
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = new Set(process.argv.slice(2));
  const unknownArgs = [...args].filter((arg) => arg !== "--full");
  if (unknownArgs.length) {
    console.error(`Unknown argument: ${unknownArgs.join(", ")}`);
    process.exitCode = 1;
  } else {
    exportIcons({
      full: args.has("--full") || process.env.FIGMA_FULL_SYNC === "true",
    }).catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
  }
}
