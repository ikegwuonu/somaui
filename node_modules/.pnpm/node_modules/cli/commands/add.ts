import fs from "fs";
import path from "path";
import { copyRecursive } from "../utils/copy.ts";

const libraryPath = path.resolve(__dirname, "../../packages/ui/src/components");
const metaPath = path.resolve(__dirname, "../../packages/ui/meta.json");

export function addCommand(componentName: string) {
  const cwd = process.cwd();
  const targetPath = path.join(cwd, "src/components");

  // Copy main component
  const src = path.join(libraryPath, componentName);
  const dest = path.join(targetPath, componentName);
  copyRecursive(src, dest);
  console.log(`✅ ${componentName} copied`);

  // Check meta.json for dependencies
  if (fs.existsSync(metaPath)) {
    const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
    const deps = meta[componentName]?.dependsOn || [];
    for (const dep of deps) {
      const depSrc = path.join(libraryPath, dep);
      const depDest = path.join(cwd, "src/components", dep);
      if (!fs.existsSync(depDest)) {
        copyRecursive(depSrc, depDest);
        console.log(`📦 Copied dependency: ${dep}`);
      }
    }
  }
}
