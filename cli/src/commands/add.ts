import fs from "fs";
import path from "path";
import { copyRecursive } from "../utils/copy";

const libraryPath = path.resolve(__dirname, "../../packages/ui/src/components");

const metaPath = path.resolve(__dirname, "../../packages/ui/meta.json");

type AddOptions = {
  all?: boolean;
  overwrite?: boolean;
  cwd?: string;
};

export function addCommand(components: string[], options: AddOptions) {
  const cwd = options.cwd || process.cwd();
  const targetRoot = path.join(cwd, "src/components");

  const overwrite = Boolean(options.overwrite);
  const installAll = Boolean(options.all);

  // Check if project is initialized
  if (!fs.existsSync(targetRoot)) {
    console.error("❌ Project not initialized. Run `npx somaui init` first.");
    process.exit(1);
  }

  if (!fs.existsSync(metaPath)) {
    console.error("❌ meta.json not found in SomaUI package");
    process.exit(1);
  }

  const meta: Record<string, string[]> = JSON.parse(
    fs.readFileSync(metaPath, "utf8")
  );

  const componentsToInstall = installAll ? Object.keys(meta) : components;

  if (componentsToInstall.length === 0) {
    console.error(
      "❌ No components specified. Use `somaui add <component>` or `--all`."
    );
    process.exit(1);
  }

  // Validate all components exist in meta
  for (const component of componentsToInstall) {
    if (!meta[component]) {
      console.error(`❌ Component "${component}" not found in SomaUI`);
      process.exit(1);
    }
  }

  // Track what we're installing to avoid duplicates
  const installedPaths = new Set<string>();
  const itemsInstalled: string[] = [];

  // Install each component with dependencies
  for (const componentName of componentsToInstall) {
    console.log(`📦 Adding ${componentName}...`);

    // Install main component
    const componentKey = `components/${componentName}`;
    if (!installedPaths.has(componentKey)) {
      if (installComponent(componentName, targetRoot, overwrite)) {
        installedPaths.add(componentKey);
        itemsInstalled.push(componentName);
        console.log(`  ✅ ${componentName}`);
      }
    } else {
      console.log(`  ⏭️ ${componentName} already installed`);
    }

    // Install dependencies from meta.json
    const dependencies = meta[componentName];
    for (const dependencyPath of dependencies) {
      if (installedPaths.has(dependencyPath)) {
        continue;
      }

      if (installDependency(dependencyPath, cwd, overwrite)) {
        installedPaths.add(dependencyPath);
        const depName = extractComponentName(dependencyPath);
        itemsInstalled.push(depName);
        console.log(`  📍 ${depName} (dependency)`);
      }
    }

    console.log(); // Empty line between components
  }

  // Summary
  console.log("🎉 Installation Complete!");
  console.log(`✅ Added ${itemsInstalled.length} item(s) to your project:`);
  itemsInstalled.forEach((item) => console.log(`  • ${item}`));

  if (itemsInstalled.length > 0) {
    console.log("\n✨ Components available at: src/components/");
    console.log(
      "📝 Remember: @/lib imports use path aliases (configure in your build tool)"
    );
  }
}

// Extract component name from path
function extractComponentName(pathString: string): string {
  // Remove "components/" prefix and file extension
  return pathString.replace(/^components\//, "").replace(/\.tsx$/, "");
}

// Install a main component (could be file or folder)
function installComponent(
  componentName: string,
  targetRoot: string,
  overwrite: boolean
): boolean {
  // Look for component in library
  const componentFile = path.join(libraryPath, `${componentName}.tsx`);
  const componentFolder = path.join(libraryPath, componentName);

  let sourcePath = "";
  let isDirectory = false;

  if (
    fs.existsSync(componentFolder) &&
    fs.statSync(componentFolder).isDirectory()
  ) {
    sourcePath = componentFolder;
    isDirectory = true;
  } else if (fs.existsSync(componentFile)) {
    sourcePath = componentFile;
    isDirectory = false;
  } else {
    console.warn(`  ⚠️ Component not found: ${componentName}`);
    return false;
  }

  // Determine target path
  const targetPath = isDirectory
    ? path.join(targetRoot, componentName)
    : path.join(targetRoot, `${componentName}.tsx`);

  // Skip if already exists and not overwriting
  if (fs.existsSync(targetPath) && !overwrite) {
    console.log(`  ⏭️ ${componentName} already exists`);
    return false;
  }

  // Ensure target directory exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  // Copy component
  if (isDirectory) {
    copyRecursive(sourcePath, targetPath, overwrite);

    // Update imports in all TypeScript/JS files in the folder
    updateImportsInDirectory(targetPath);
  } else {
    fs.copyFileSync(sourcePath, targetPath);
    updateImportsInFile(targetPath);
  }

  return true;
}

// Install a dependency (could be file or folder)
function installDependency(
  dependencyPath: string,
  cwd: string,
  overwrite: boolean
): boolean {
  const sourceBase = path.resolve(__dirname, "../../packages/ui/src");
  const targetBase = path.join(cwd, "src");

  const sourcePath = path.join(sourceBase, dependencyPath);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`  ⚠️ Dependency not found: ${dependencyPath}`);
    return false;
  }

  const targetPath = path.join(targetBase, dependencyPath);

  // Skip if already exists and not overwriting
  if (fs.existsSync(targetPath) && !overwrite) {
    return false;
  }

  // Ensure target directory exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  // Copy based on type
  const isDirectory = fs.statSync(sourcePath).isDirectory();
  if (isDirectory) {
    copyRecursive(sourcePath, targetPath, overwrite);
    updateImportsInDirectory(targetPath);
  } else {
    fs.copyFileSync(sourcePath, targetPath);
    updateImportsInFile(targetPath);
  }

  return true;
}

// Update imports in all TypeScript/JS files in a directory
function updateImportsInDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) return;

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dirPath, item.name);

    if (item.isDirectory()) {
      updateImportsInDirectory(itemPath);
    } else if (
      itemPath.endsWith(".tsx") ||
      itemPath.endsWith(".ts") ||
      itemPath.endsWith(".js") ||
      itemPath.endsWith(".jsx")
    ) {
      updateImportsInFile(itemPath);
    }
  }
}

// Update imports in a single file
function updateImportsInFile(filePath: string) {
  try {
    let content = fs.readFileSync(filePath, "utf-8");
    const originalContent = content;

    const currentDir = path.dirname(filePath);
    const projectRoot = process.cwd();

    // Update @/components/... imports to relative paths
    content = content.replace(
      /from\s+['"]@\/components\/([^'"]+)['"]/g,
      (match, importPath) => {
        try {
          const targetPath = path.join(
            projectRoot,
            "src/components",
            importPath
          );
          let relativePath = path.relative(currentDir, targetPath);

          // Ensure path starts with ./
          if (!relativePath.startsWith(".")) {
            relativePath = "./" + relativePath;
          }

          // Remove .tsx/.ts extension for cleaner imports
          relativePath = relativePath.replace(/\.(tsx|ts|js|jsx)$/, "");

          return `from "${relativePath}"`;
        } catch (error) {
          return match; // Keep original if we can't compute
        }
      }
    );

    // Update @/icons/... imports to relative paths
    content = content.replace(
      /from\s+['"]@\/icons\/([^'"]+)['"]/g,
      (match, iconName) => {
        try {
          const targetPath = path.join(projectRoot, "src/icons", iconName);
          let relativePath = path.relative(currentDir, targetPath);

          if (!relativePath.startsWith(".")) {
            relativePath = "./" + relativePath;
          }

          // Remove file extension
          relativePath = relativePath.replace(/\.(tsx|ts|js|jsx)$/, "");

          return `from "${relativePath}"`;
        } catch {
          return match;
        }
      }
    );

    // DO NOT update @/lib/... imports - leave them as aliases
    // Example: import { cn } from '@/lib/cn' stays as-is

    // Update relative imports within the same component
    content = content.replace(
      /from\s+['"]\.\/([^'"]+)['"]/g,
      (match, importPath) => {
        try {
          const targetPath = path.join(currentDir, importPath);
          let relativePath = path.relative(currentDir, targetPath);

          if (!relativePath.startsWith(".")) {
            relativePath = "./" + relativePath;
          }

          // Remove file extension
          relativePath = relativePath.replace(/\.(tsx|ts|js|jsx)$/, "");

          return `from "${relativePath}"`;
        } catch {
          return match;
        }
      }
    );

    // Update parent directory imports
    content = content.replace(
      /from\s+['"]\.\.\/([^'"]+)['"]/g,
      (match, importPath) => {
        try {
          const targetPath = path.join(currentDir, "..", importPath);
          let relativePath = path.relative(currentDir, targetPath);

          if (!relativePath.startsWith(".")) {
            relativePath = "./" + relativePath;
          }

          // Remove file extension
          relativePath = relativePath.replace(/\.(tsx|ts|js|jsx)$/, "");

          return `from "${relativePath}"`;
        } catch {
          return match;
        }
      }
    );

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf-8");
    }
  } catch (error) {
    console.warn(
      `  ⚠️ Could not update imports in ${path.relative(
        process.cwd(),
        filePath
      )}`
    );
  }
}
