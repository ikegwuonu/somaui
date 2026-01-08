// scripts/build-batch.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Group components to build in batches
const batches = [
  [
    "accordion",
    "action-icon",
    "advanced-checkbox",
    "advanced-radio",
    "alert",
    "avatar",
    "announcement",
    "badge",
    "button",
  ],
  [
    "checkbox",
    "checkbox-group",
    "collapse",
    "drawer",
    "dropdown",
    "empty",
    "input",
    "loader",
    "modal",
  ],
  [
    "multi-select",
    "password",
    "pin-code",
    "popover",
    "progressbar",
    "radial-progressbar",
    "radio",
    "radio-group",
  ],
  [
    "select",
    "stepper",
    "switch",
    "table",
    "tabs",
    "textarea",
    "tooltip",
    "typography",
    "upload",
  ],
  ["layouts/box", "layouts/flex", "layouts/grid"],
  [
    "typography/blockquote",
    "typography/bold",
    "typography/code",
    "typography/italic",
    "typography/text",
    "typography/title",
  ],
];

// Additional files that need to be built
const additionalFiles = [
  "src/index.ts", // Main barrel export
  "src/lib/cn.ts", // Utility
  "src/lib/use-collapse.ts", // Hook
  "src/components/field-clear-button.tsx",
  "src/components/field-error-text.tsx",
  "src/components/field-helper-text.tsx",
  "src/components/highlight.tsx",
  "src/components/upload/file-input.tsx",
  "src/components/upload/upload-zone.tsx",
];

// Ensure dist directory exists
const distDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Clean dist folder at the beginning
console.log("🧹 Cleaning dist folder...");
const entriesToKeep = ["package.json", "README.md"]; // Files to keep
const items = fs.readdirSync(distDir);
items.forEach((item) => {
  const itemPath = path.join(distDir, item);
  if (!entriesToKeep.includes(item)) {
    try {
      fs.rmSync(itemPath, { recursive: true, force: true });
    } catch (error) {
      // Ignore errors
    }
  }
});

// Build each batch
batches.forEach((batch, index) => {
  console.log(`\nBuilding batch ${index + 1}/${batches.length}`);

  const entries = batch
    .map((comp) => `src/components/${comp}/index.ts`)
    .join(" ");

  try {
    execSync(
      `tsup ${entries} --format esm,cjs --dts --out-dir dist --no-clean`,
      {
        stdio: "inherit",
        cwd: path.join(__dirname, ".."),
      }
    );
  } catch (error) {
    console.error(`Failed to build batch ${index + 1}:`, error);
    process.exit(1);
  }
});

// Build additional files (including src/index.ts)
console.log("\nBuilding additional files and main index...");
try {
  const additionalEntries = additionalFiles.join(" ");
  execSync(
    `tsup ${additionalEntries} --format esm,cjs --dts --out-dir dist --no-clean`,
    {
      stdio: "inherit",
      cwd: path.join(__dirname, ".."),
    }
  );
} catch (error) {
  console.error("Failed to build additional files:", error);
  process.exit(1);
}

// Generate root index files if they don't exist from src/index.ts build
console.log("\nEnsuring root index files exist...");
ensureRootIndexFiles(distDir);

console.log("\nBuild completed successfully!");

// Helper function to ensure root index files exist
function ensureRootIndexFiles(distDir) {
  const indexFiles = ["index.js", "index.cjs", "index.d.ts"];

  // If src/index.ts was built, it should have created these files
  // If not, create them manually
  indexFiles.forEach((file) => {
    const filePath = path.join(distDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${file} not found, creating...`);

      if (file === "index.js") {
        // Create ESM index that re-exports from src/index.ts
        createESMIndex(distDir);
      } else if (file === "index.cjs") {
        // Create CJS index that re-exports from src/index.ts
        createCJSIndex(distDir);
      } else if (file === "index.d.ts") {
        // Create TypeScript index that re-exports types
        createTypeScriptIndex(distDir);
      }
    }
  });
}

// Create ESM index file
function createESMIndex(distDir) {
  const content = `// Auto-generated index file for @somaui/ui
// Re-exports all components from the main barrel file

export * from './index.js';
`;
  fs.writeFileSync(path.join(distDir, "index.js"), content);
  console.log("✅ Created dist/index.js");
}

// Create CJS index file
function createCJSIndex(distDir) {
  const content = `// Auto-generated index file for @somaui/ui
// Re-exports all components from the main barrel file

module.exports = require('./index.cjs');
module.exports.default = module.exports;
`;
  fs.writeFileSync(path.join(distDir, "index.cjs"), content);
  console.log("✅ Created dist/index.cjs");
}

// Create TypeScript index file
function createTypeScriptIndex(distDir) {
  const content = `// Auto-generated type definitions for @somaui/ui
// Re-exports all types from the main barrel file

export * from './index.d.ts';
`;
  fs.writeFileSync(path.join(distDir, "index.d.ts"), content);
  console.log("✅ Created dist/index.d.ts");
}
