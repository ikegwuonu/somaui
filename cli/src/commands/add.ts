import fs from 'fs';
import path from 'path';
import { copyRecursive } from '../utils/copy';

// Assets inside src/assets in CLI
const assetsRoot = path.join(__dirname, '../assets'); // CLI/src/assets
const libraryPath = path.join(assetsRoot, 'components'); // All main components
const metaPath = path.join(assetsRoot, 'meta.json'); // Dependencies for components
console.log(assetsRoot);
console.log(metaPath);
type AddOptions = {
  all?: boolean;
  overwrite?: boolean;
  cwd?: string;
};
if (!assetsRoot) {
  console.log('No assets located');
}

export function addCommand(components: string[], options: AddOptions) {
  const cwd = options.cwd || process.cwd();
  const targetRoot = path.join(cwd, 'src/components');

  const overwrite = Boolean(options.overwrite);
  const installAll = Boolean(options.all);

  // Check if project is initialized
  if (!fs.existsSync(targetRoot)) {
    console.error(
      '❌ Project not initialized. Run `npx @somaui/cli init` first.'
    );
    process.exit(1);
  }

  if (!fs.existsSync(metaPath)) {
    console.error('❌ meta.json not found in CLI assets');
    process.exit(1);
  }

  const meta: Record<string, string[]> = JSON.parse(
    fs.readFileSync(metaPath, 'utf8')
  );

  // If --all, we include all components in assets/components folder
  const allComponentsInAssets = fs
    .readdirSync(libraryPath)
    .map((f) => f.replace(/\.tsx$/, ''));
  const componentsToInstall = installAll ? allComponentsInAssets : components;

  if (componentsToInstall.length === 0) {
    console.error(
      '❌ No components specified. Use `@somaui/cli add <component>` or `--all`.'
    );
    process.exit(1);
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

    // Install dependencies from meta.json if any
    const dependencies = meta[componentName] || [];
    for (const dependencyPath of dependencies) {
      if (installedPaths.has(dependencyPath)) continue;

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
  console.log('🎉 Installation Complete!');
  console.log(`✅ Added ${itemsInstalled.length} item(s) to your project:`);
  itemsInstalled.forEach((item) => console.log(`  • ${item}`));

  if (itemsInstalled.length > 0) {
    console.log('\n✨ Components available at: src/components/');
    console.log(
      '📝 Note: Files keep their original import structure. Update your build tool config for aliases if needed.'
    );
  }
}

// Extract component name from path
function extractComponentName(pathString: string): string {
  // Remove "components/" prefix and file extension
  return pathString.replace(/^components\//, '').replace(/\.tsx$/, '');
}

// Install a main component (could be file or folder)
function installComponent(
  componentName: string,
  targetRoot: string,
  overwrite: boolean
): boolean {
  const componentFile = path.join(libraryPath, `${componentName}.tsx`);
  const componentFolder = path.join(libraryPath, componentName);

  let sourcePath = '';
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

  const targetPath = isDirectory
    ? path.join(targetRoot, componentName)
    : path.join(targetRoot, `${componentName}.tsx`);

  if (fs.existsSync(targetPath) && !overwrite) {
    console.log(`  ⏭️ ${componentName} already exists`);
    return false;
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  if (isDirectory) {
    copyRecursive(sourcePath, targetPath, overwrite);
  } else {
    fs.copyFileSync(sourcePath, targetPath);
  }

  return true;
}

// Install a dependency (could be file or folder)
function installDependency(
  dependencyPath: string,
  cwd: string,
  overwrite: boolean
): boolean {
  const sourceBase = path.join(assetsRoot); // Assets root
  const targetBase = path.join(cwd, 'src');

  const sourcePath = path.join(sourceBase, dependencyPath);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`  ⚠️ Dependency not found: ${dependencyPath}`);
    return false;
  }

  const targetPath = path.join(targetBase, dependencyPath);

  if (fs.existsSync(targetPath) && !overwrite) return false;

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  const isDirectory = fs.statSync(sourcePath).isDirectory();
  if (isDirectory) {
    copyRecursive(sourcePath, targetPath, overwrite);
  } else {
    fs.copyFileSync(sourcePath, targetPath);
  }

  return true;
}
