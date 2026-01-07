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

// Ensure dist directory exists
const distDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Build each batch
batches.forEach((batch, index) => {
  console.log(`\nBuilding batch ${index + 1}/${batches.length}`);

  const entries = batch
    .map((comp) => `src/components/${comp}/index.ts`)
    .join(" ");

  try {
    execSync(
      ` tsup ${entries} --format esm,cjs --dts --out-dir dist --no-clean`,
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

console.log("\nBuild completed successfully!");
