# @latticafi/icons

React icon components generated from the Lattica Figma library.

## Install

The package is published privately through GitHub Packages. Add the LatticaFi
registry to your project's `.npmrc`:

```ini
@latticafi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Then install the package with a GitHub token that has `read:packages` access:

```bash
npm install @latticafi/icons
```

## Use

Import icons by name from the package:

```tsx
import { Search, Settings } from "@latticafi/icons";

export function Toolbar() {
  return (
    <div>
      <Search size={20} aria-label="Search" />
      <Settings size={20} aria-label="Settings" />
    </div>
  );
}
```

For a direct import:

```tsx
import Search from "@latticafi/icons/icons/Search";
```

The dynamic `Icon` component accepts a typed icon name and renders through
React Suspense:

```tsx
import { Icon } from "@latticafi/icons";

<Icon name="Search" size={20} fallback={null} aria-label="Search" />;
```

All icons accept standard SVG props plus `size`, which defaults to `24`.
Icons use `currentColor`, so their color inherits from surrounding text unless
the `color` property is provided.

## Sync From Figma

Copy `.env.example` to `.env.local`, then add a Figma personal access token:

```dotenv
FIGMA_TOKEN=your-figma-token
FIGMA_FILE_KEY=xl01U3PawlPC5RtraiZVaV
```

Export, optimize, generate, and build the complete library:

```bash
npm run generate
```

To rebuild from the checked-in SVG sources without contacting Figma:

```bash
npm run build
```

Generated package output is written to `dist/`.

## Release

Create a changeset for each publishable change:

```bash
npx changeset
```

Push the changeset to `main`. The release workflow creates a version PR.
Merging that PR publishes the new version to GitHub Packages.
