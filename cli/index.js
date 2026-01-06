#!/usr/bin/env node

import fs from "fs";
import path from "path";

// ------------------- Config ------------------- //
const libraryPath = path.resolve(__dirname, "../packages/ui/src");
const projectSrcPath = path.resolve(process.cwd(), "src"); // user project root src

// ------------------- Helpers ------------------- //
function copyFile(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied: ${path.relative(process.cwd(), dest)}`);
  } else {
    console.log(
      `⚠️ Skipped (already exists): ${path.relative(process.cwd(), dest)}`
    );
  }
}

// ------------------- CLI Input ------------------- //
const args = process.argv.slice(2);
if (!args[0]) {
  console.error("❌ Please specify a component, e.g. `npx somaui Button`");
  process.exit(1);
}

const componentName = args[0];

// ------------------- Paths ------------------- //
const componentFile = path.join(
  libraryPath,
  "components",
  `${componentName}.tsx`
);
const metaFile = path.join(
  libraryPath,
  "components",
  `${componentName}.meta.json`
);

// ------------------- Check existence ------------------- //
if (!fs.existsSync(componentFile)) {
  console.error(`❌ Component not found: ${componentName}`);
  process.exit(1);
}
if (!fs.existsSync(metaFile)) {
  console.error(
    `⚠️ Metadata file missing for ${componentName}, no dependencies will be copied.`
  );
}

// ------------------- Copy main component ------------------- //
copyFile(
  componentFile,
  path.join(projectSrcPath, "components", `${componentName}.tsx`)
);

// ------------------- Copy dependencies ------------------- //
if (fs.existsSync(metaFile)) {
  const meta = JSON.parse(fs.readFileSync(metaFile, "utf8"));
  if (meta.dependencies && meta.dependencies.length > 0) {
    for (const dep of meta.dependencies) {
      const src = path.join(libraryPath, dep);
      const dest = path.join(projectSrcPath, dep);
      if (fs.existsSync(src)) {
        copyFile(src, dest);
      } else {
        console.warn(`⚠️ Dependency not found in library: ${dep}`);
      }
    }
  }
}

console.log(`🎉 ${componentName} successfully copied!`);
