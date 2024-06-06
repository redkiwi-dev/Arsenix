#!/usr/bin/env node
import { program } from "commander";

program
  .name("create-framelib")
  .description("Framework for building React libraries")
  .version("0.0.1");

program
  .option("project-name", "<project-name> [options]", "my-lib")
  .option("-t, --typescript", "use typescript", true)
  .option("-j, --javascript", "use javascript", false)
  .option("--tailwind", "use tailwindcss", true)
  .option(
    "-p, --package-manager [npm/yarn/pnpm/bun]",
    "choose the package manager",
    "npm"
  )
  .action(run);

interface Options {
  projectName: string;
  typescript: boolean;
  javascript: boolean;
  tailwind: boolean;
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
}

function run(opt: Options) {
  console.log(opt.typescript);
}

program.parse();