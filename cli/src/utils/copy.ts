import fs from "fs";
import path from "path";

export function copyRecursive(
  source: string,
  destination: string,
  overwrite = false
) {
  // Check if source exists
  if (!fs.existsSync(source)) {
    throw new Error(`Source not found: ${source}`);
  }

  const stats = fs.statSync(source);

  if (stats.isDirectory()) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    // Read all items in source directory
    const items = fs.readdirSync(source);

    for (const item of items) {
      const srcPath = path.join(source, item);
      const destPath = path.join(destination, item);
      copyRecursive(srcPath, destPath, overwrite);
    }
  } else {
    // It's a file - copy if destination doesn't exist or overwrite is true
    if (!fs.existsSync(destination) || overwrite) {
      // Ensure destination directory exists
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.copyFileSync(source, destination);
    }
  }
}
