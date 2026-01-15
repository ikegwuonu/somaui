import fs from 'fs';
import path from 'path';
import { detectProject } from '../utils/detect-project';
import { copyRecursive } from '../utils/copy';

export function initCommand() {
  const project = detectProject();
  console.log('🔍 Detected project setup:', project);

  if (!project.tailwind) {
    console.log(
      '\n⚠️ Install Tailwind v4+ and @tailwindcss/forms plugin to use SomaUI components!'
    );
    console.log('   Learn more: https://tailwindcss.com/docs/installation');
  }

  const cwd = process.cwd();
  const assetsRoot = path.join(__dirname, 'assets'); // <- points to CLI assets

  // 1️⃣ Copy global.css
  const globalDest = path.join(cwd, 'src/styles/global.css');
  const uiGlobalCss = path.join(assetsRoot, 'styles/global.css');

  if (!fs.existsSync(globalDest)) {
    fs.mkdirSync(path.dirname(globalDest), { recursive: true });

    if (fs.existsSync(uiGlobalCss)) {
      fs.copyFileSync(uiGlobalCss, globalDest);
      console.log('✅ Copied src/styles/global.css from SomaUI');
    } else {
      // Fallback if global.css doesn't exist
      fs.writeFileSync(globalDest, '@import "tailwindcss";');
      console.log('✅ Created src/styles/global.css');
      console.log(
        '⚠️ Initialize SomaUI with `npx @somaui/cli init` to get lib, icons, and components folders.'
      );
    }
  } else {
    console.log('⚠️ src/styles/global.css already exists');
  }

  // 2️⃣ Copy icons folder
  const iconsDest = path.join(cwd, 'src/icons');
  const uiIconsDir = path.join(assetsRoot, 'icons');

  if (!fs.existsSync(iconsDest)) {
    if (fs.existsSync(uiIconsDir)) {
      copyRecursive(uiIconsDir, iconsDest);
      console.log('✅ Copied src/icons/ folder from SomaUI');
    } else {
      fs.mkdirSync(iconsDest, { recursive: true });
      console.log('✅ Created src/icons/ folder');
    }
  } else {
    console.log('⚠️ src/icons/ already exists');
  }

  // 3️⃣ Copy lib folder
  const libsDest = path.join(cwd, 'src/lib');
  const uiLibDir = path.join(assetsRoot, 'lib');

  if (!fs.existsSync(libsDest)) {
    if (fs.existsSync(uiLibDir)) {
      copyRecursive(uiLibDir, libsDest);
      console.log('✅ Copied src/lib/ folder from SomaUI');
    } else {
      fs.mkdirSync(libsDest, { recursive: true });
      console.log('✅ Created src/lib/ folder');
    }
  } else {
    console.log('⚠️ src/lib/ already exists');
  }

  // 4️⃣ Create components folder (empty for now)
  const componentsDest = path.join(cwd, 'src/components');
  if (!fs.existsSync(componentsDest)) {
    fs.mkdirSync(componentsDest, { recursive: true });
    console.log('✅ Created src/components/ folder');
  } else {
    console.log('⚠️ src/components/ already exists');
  }

  // 5️⃣ Summary / next steps
  console.log(
    '\n🎉 SomaUI initialized!\n\n' +
      'Next steps:\n' +
      '1. Configure path aliases in your project:\n' +
      '   // tsconfig.json or vite.config.ts\n' +
      '   {\n' +
      '     "@/*": ["./src/*"],\n' +
      '     "@/lib/*": ["./src/lib/*"]\n' +
      '   }\n\n' +
      '2. Add components:\n' +
      '   npx @somaui/cli add button\n' +
      '   npx @somaui/cli add button input card\n' +
      '   npx @somaui/cli add --all\n' +
      '   npx @somaui/cli add button --overwrite\n'
  );
}
