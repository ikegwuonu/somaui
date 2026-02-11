# @somaui/cli

The official CLI for **SomaUI**.  
Initialize your project, scaffold folders, and add SomaUI components with zero manual setup.

Inspired by a **copy-first, transparent UI workflow** — SomaUI gives you full control over your codebase.

---

## ✨ What the CLI Does

The `@somaui/cli` helps you:

- Detect your project setup automatically
- Initialize SomaUI in an existing React project
- Copy required styles, icons, and utilities into your app
- Add SomaUI components directly to your source code
- Work seamlessly with **Tailwind CSS v4+**

---

## 📦 Installation

🚀 Quick Start

Inside your project root, run:

**npx @somaui/cli init**

This will initialize SomaUI in your project.

🧠 What somaui init Does

When you run somaui init, the CLI:

1️⃣ Detects your project setup

It checks for:

React / Next.js / Vite

Tailwind CSS availability

If Tailwind is missing, you’ll see a warning:

⚠️ Install Tailwind v4+ and @tailwindcss/forms to use SomaUI components

2️⃣ Copies global styles
src/styles/global.css

Copied from @somaui/ui

Includes Tailwind v4 base imports

Will NOT overwrite existing files

3️⃣ Copies icons
src/icons/

SVG icon set used by SomaUI components

Fully editable

4️⃣ Copies shared utilities
src/lib/

Utility functions used internally by components

You own and control this code

5️⃣ Creates components directory
src/components/

Empty by default

Components are added here when you run npx @somaui/cli add

📁 Project Structure After Init

src/
├── components/
├── icons/
├── lib/
├── styles/
│ └── global.css

➕ Adding Components

**Add individual components:**

npx @somaui/cli add button

**Add multiple components:**

npx @somaui/cli add button input

**Add all available components:**

npx @somaui/cli add --all

**Overwrite existing components:**

npx @somaui/cli add button --overwrite

⚙️ Required Configuration
Path Aliases (Required)

Configure path aliases in your project.

tsconfig.json
{
"compilerOptions": {
"paths": {
"@/_": ["./src/_"],
"@/lib/_": ["./src/lib/_"]
}
}
}

For Vite or Next.js, ensure aliases match this setup.

🎨 Styling Requirements

SomaUI requires:

Tailwind CSS v4+

@tailwindcss/forms plugin

Installation guide:
👉 https://tailwindcss.com/docs/installation

🧩 Philosophy

No black boxes

No runtime dependency on SomaUI

Components are copied, not imported

You can modify everything

SomaUI works like a design system starter — not a locked UI library.

📚 Ecosystem

UI Components: @somaui/ui

Docs: Built with Docusaurus

CLI: @somaui/cli

🛠 Requirements

Node.js >= 18

npm, pnpm, or yarn

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a feature branch

Commit your changes

Open a Pull Request
