import fs from 'fs';
import path from 'path';

export function detectPackageManager() {
  if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm';
  if (fs.existsSync('yarn.lock')) return 'yarn';
  if (fs.existsSync('package-lock.json')) return 'npm';
  return 'unknown';
}

export function findProjectRoot(cwd = process.cwd()) {
  let current = cwd;

  while (current !== path.parse(current).root) {
    if (fs.existsSync(path.join(current, 'package.json'))) {
      return current;
    }
    current = path.dirname(current);
  }

  return null;
}
export function readPackageJson(root: string) {
  return JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
}
export function detectFramework(pkg: any) {
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  if (deps.next) return 'next';
  if (deps.vite) return 'vite';
  if (deps['react-scripts']) return 'cra';

  return 'unknown';
}
export function detectTailwind(root: string, pkg: any) {
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  const hasDep = !!deps.tailwindcss;

  const hasConfig =
    fs.existsSync(path.join(root, 'tailwind.config.js')) ||
    fs.existsSync(path.join(root, 'tailwind.config.ts')) ||
    fs.existsSync(path.join(root, 'tailwind.config.cjs'));
  if (hasConfig) console.log('Tailwind config file is deprecated in v4');
  return hasDep;
}
export function detectTypeScript(root: string) {
  return fs.existsSync(path.join(root, 'tsconfig.json'));
}
