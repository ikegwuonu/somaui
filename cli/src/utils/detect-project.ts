import {
  detectFramework,
  detectPackageManager,
  detectTailwind,
  detectTypeScript,
  findProjectRoot,
  readPackageJson,
} from "./read-package-json";

export function detectProject() {
  const root = findProjectRoot();
  if (!root) {
    throw new Error("Could not find project root (package.json not found)");
  }
  const pkg = readPackageJson(root);

  return {
    root,
    framework: detectFramework(pkg),
    tailwind: detectTailwind(root, pkg),
    typescript: detectTypeScript(root),
    packageManager: detectPackageManager(),
  };
}
