# @latticafi/icons

React icon components generated from the Lattica design system. The canonical
source is the [Icons frame in Figma](https://www.figma.com/design/xl01U3PawlPC5RtraiZVaV/design-system?node-id=22-4).

## Install From GitHub Packages

The package is private and hosted by GitHub Packages, not npmjs.com. `npm` is
only the package-manager client used to authenticate with GitHub and install
the package.

Create or update the consuming project's `.npmrc`:

```ini
@latticafi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

Set `GITHUB_PACKAGES_TOKEN` to a GitHub personal access token with
`read:packages` access, then install normally:

```bash
npm install @latticafi/icons
```

## Use

Prefer named imports for icons known at build time:

```tsx
import { Bell, Check } from "@latticafi/icons";

export function Status() {
  return (
    <div style={{ color: "seagreen" }}>
      <Check size={20} />
      <Bell size={20} color="tomato" />
    </div>
  );
}
```

Icons are monochrome and use `currentColor`, so they inherit CSS `color`. They
also accept the standard SVG props and a `size` prop, which defaults to `24`.

Use a direct import when a smaller import graph is useful:

```tsx
import Search from "@latticafi/icons/icons/Search";
```

The lazy, typed icon component is available from a separate entry point when
the icon name comes from configuration, API data, or another runtime value:

```tsx
import Icon from "@latticafi/icons/Icon";

<Icon name="Search" size={20} fallback={null} />;
```

This entry contains a small icon-name loader map. It loads the selected icon's
code on demand rather than loading every icon implementation. Prefer named
imports when the icon is known while writing the component; they are simpler
and do not require React Suspense.

Icon names are available without importing the React components:

```tsx
import { iconNames, type IconName } from "@latticafi/icons/catalog";
```

## Accessibility

Icons are decorative by default and render with `aria-hidden="true"`. Put the
accessible name on the containing control:

```tsx
<button aria-label="Search">
  <Search />
</button>
```

When a standalone icon conveys meaning, explicitly expose and name it:

```tsx
<CircleAlert role="img" aria-hidden={false} aria-label="Warning" />
```

## Sync From Figma

Copy `.env.example` to `.env.local` and set a Figma personal access token. The
file key and canonical frame ID are already configured:

```dotenv
FIGMA_TOKEN=your-figma-token
FIGMA_FILE_KEY=xl01U3PawlPC5RtraiZVaV
FIGMA_ICON_NODE_ID=22:4
```

Run the transactional incremental sync and build:

```bash
npm run generate
npm run verify
```

The sync reads only components inside frame `22:4`. It fingerprints each
component's vector geometry and render-relevant properties, then renders only
new or changed icons. Renamed and unchanged icons reuse their verified SVGs.
Deleted icons are removed from the staged result.

Every run still stages and validates the complete icon set before replacing
`svg/`. It also rejects naming collisions and unexpectedly large removals.
`icons.manifest.json` records the exact Figma version, source path, source
fingerprint, exported name, and SVG content hash.

Use a full reconciliation after changes to shared Figma dependencies, when
investigating rendering drift, and periodically before a release:

```bash
npm run export:figma:full
npm run verify
```

The first sync after upgrading an older manifest automatically performs one
full render to establish trustworthy source fingerprints.

GitHub's **Sync Figma Icons** workflow performs the same process without
publishing. Its **full_sync** input forces a complete render. Download the
`figma-icon-sync` artifact, review the source and manifest diff locally, then
open a normal pull request.

## Release

Every publishable pull request should include a changeset:

```bash
npx changeset
```

For a release, apply the pending changesets and commit the generated version
and changelog changes:

```bash
npm run version
npm run verify
git add .
git commit -m "Release vX.Y.Z"
git push origin main
```

After CI passes on that exact commit, tag it with the package version:

```bash
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin vX.Y.Z
```

Only a matching `v*` tag publishes to GitHub Packages. Figma sync and manual
workflow runs cannot publish.
