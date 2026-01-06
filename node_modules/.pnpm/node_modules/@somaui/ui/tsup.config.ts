import { defineConfig } from "tsup";
import path from "path";
import { fileURLToPath } from "url";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  entry: ["src/components/**/index.ts", "src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  splitting: true,
  clean: true,
  esbuildOptions(options) {
    options.alias = {
      "@": path.resolve(__dirname, "src"),
    };
  },
});
