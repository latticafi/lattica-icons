import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/icons/*.tsx", "src/Icon.tsx", "src/catalog.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  outDir: "dist",
  external: ["react", "react/jsx-runtime"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
