#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from '../commands/init';
import { addCommand } from '../commands/add';

const program = new Command();

program
  .name('somaui')
  .description('SomaUI CLI - Add beautiful UI components to your project')
  .version('1.0.0');

program
  .command('init')
  .description(
    'Initialize SomaUI in your project (copies global.css, lib, icons)'
  )
  .action(() => {
    initCommand();
  });

program
  .command('add')
  .description('Add components to your project with dependencies')
  .argument('[components...]', 'Component names to add')
  .option('-a, --all', 'Add all components')
  .option('-o, --overwrite', 'Overwrite existing files')
  .option('-c, --cwd <path>', 'Working directory')
  .action((components, options) => {
    addCommand(components, options);
  });

// Add help for common usage
program.addHelpText(
  'after',
  `
Examples:
  $ npx @somaui/cli init
  $ npx @somaui/cli add button
  $ npx @somaui/cli add button input checkbox
  $ npx @somaui/cli add --all
  $ npx @somaui/cli add button --overwrite

Important:
  • Run 'init' first to set up project structure
  • Configure path aliases (@/lib/*) in your build tool
  • Use --overwrite to update existing components
`
);

program.parse();
