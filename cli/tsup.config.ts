import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/bin/somaui.ts'],
  format: ['cjs'],
  target: 'node18',
  platform: 'node',
  outDir: 'dist',
  clean: true,
  minify: true,
  sourcemap: false,
  dts: false, // We don't need types for a CLI
});
