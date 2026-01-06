#!/usr/bin/env node
import { argv } from "process";
import { initCommand } from "../commands/init.js";
import { addCommand } from "../commands/add.js";

const args = argv.slice(2);

switch (args[0]) {
  case "init":
    initCommand();
    break;
  case "add":
    if (!args[1]) {
      console.error(
        "Please provide a component name: npx somaui add <component>"
      );
      process.exit(1);
    }
    addCommand(args[1]);
    break;
  default:
    console.log(`
Usage:
  npx somaui init             # Setup global.css, icons, libs
  npx somaui add <component>  # Add a component to your project
    `);
    break;
}
