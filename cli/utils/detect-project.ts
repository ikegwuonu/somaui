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
  const pkg = readPackageJson(root);

  return {
    root,
    framework: detectFramework(pkg),
    tailwind: detectTailwind(root, pkg),
    typescript: detectTypeScript(root),
    packageManager: detectPackageManager(),
  };
}
