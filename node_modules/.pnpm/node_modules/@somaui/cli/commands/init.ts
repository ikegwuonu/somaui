import fs from "fs";
import path from "path";

export function initCommand() {
  const cwd = process.cwd();

  // 1️⃣ global.css
  const globalDest = path.join(cwd, "src/styles/global.css");
  if (!fs.existsSync(globalDest)) {
    fs.mkdirSync(path.dirname(globalDest), { recursive: true });
    fs.writeFileSync(globalDest, `/* Add Tailwind base + plugins here */\n`);
    console.log("✅ global.css created");
  } else {
    console.log("⚠️ global.css already exists");
  }

  // 2️⃣ icons folder
  const iconsDest = path.join(cwd, "src/icons");
  if (!fs.existsSync(iconsDest)) {
    fs.mkdirSync(iconsDest, { recursive: true });
    console.log("✅ icons/ folder created");
  } else {
    console.log("⚠️ icons/ already exists");
  }

  // 3️⃣ libs folder
  const libsDest = path.join(cwd, "src/libs");
  if (!fs.existsSync(libsDest)) {
    fs.mkdirSync(libsDest, { recursive: true });
    console.log("✅ libs/ folder created");
  } else {
    console.log("⚠️ libs/ already exists");
  }

  console.log(
    "🎉 SomaUI initialized! You can now add components with `npx somaui add <component>`."
  );
}
