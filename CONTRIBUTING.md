# Contributing to SomaUI

First off, thank you for considering contributing to **SomaUI** 🎉
We appreciate every issue, suggestion, documentation improvement, and pull request.

SomaUI is built to make UI development simpler and faster — and community contributions help us move in that direction.

---

## Table of Contents

- Code of Conduct
- Ways to Contribute
- Getting Started
- Development Setup
- Project Structure
- Pull Request Guidelines
- Commit Guidelines
- Reporting Issues
- Feature Requests

---

## Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Provide constructive feedback
- Avoid harassment or discrimination of any kind

We aim to maintain a welcoming environment for everyone.

---

## Ways to Contribute

You can contribute in many ways:

- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📝 Improving CLI and Scripts
- 📝 Improving documentation
- 🎨 Improving UI/UX consistency
- 🧩 Adding new components
- ⚡ Improving performance
- 🧪 Writing or improving tests

---

## Getting Started

1. Fork the repository
2. Clone your fork

```bash
git clone https://github.com/ikegwuonu/somaui.git
```

3. Install dependencies

```bash
pnpm install
```

4. Start the development server

```bash
npm run dev
```

---

## Development Guidelines

### 1. Keep Components Simple

SomaUI focuses on simplicity and developer experience. Avoid unnecessary abstractions.

### 2. Follow Existing Patterns

Before creating a new component, study existing ones to maintain consistency.

### 3. Accessibility First

Ensure components:

- Support keyboard navigation
- Include proper ARIA attributes
- Follow semantic HTML practices

### 4. Type Safety

If using TypeScript, ensure proper types are added and exported.

---

## Project Structure

```
root/
  cli/
  docs/
  packages/ui
  vite-app/
```

Keep new additions aligned with the existing structure.

---

## Pull Request Guidelines

Before submitting a PR:

- Ensure the project builds successfully
- Ensure there are no lint errors
- Keep PRs focused (one feature or fix per PR)
- Write a clear PR description explaining:
  - What you changed
  - Why you changed it
  - Screenshots (if UI-related)

### PR Title Format

```
feat(packages/ui): add new Button variant
fix(packages/ui): resolve dropdown focus issue
chore(cli): update dependencies
```

---

## Commit Guidelines

We recommend using Conventional Commits:

- `feat:` → new feature
- `fix:` → bug fix
- `docs:` → documentation changes
- `refactor:` → code improvement without behavior change
- `chore:` → maintenance

Example:

```bash
git commit -m "fix(cli): refactor copy-assets script"
```

---

```bash
git commit -m "feat(packages/ui): add modal component"
```

---

## Reporting Issues

When reporting a bug, please include:

- Description of the issue
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Environment (OS, browser, version)

Clear issue reports help us resolve problems faster.

---

## Feature Requests

Before requesting a feature:

- Check if it already exists
- Search open issues
- Explain the use case clearly

We prioritize features that:

- Improve developer experience
- Keep the library lightweight
- Align with SomaUI's simplicity philosophy

---

## Questions?

If you're unsure about something, open a discussion or issue first.
We’re happy to guide you before you start working on a feature.

---

Thank you for helping make SomaUI better 🚀
