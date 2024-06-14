#!/usr/bin/env node
import { program } from "commander";
import fs from "fs";
import path from "path";
import url from "url";

const programInfo = {
  name: "create-arsenix-app",
  description: "Framework for build React libraries",
  version: "1.0.0",
};

program
  .name(programInfo.name)
  .description(programInfo.description)
  .version(programInfo.version);


program
  .argument("project-name")
  .option("project-name", "<project-name> [options]", "my-lib")
  .option(
    "-p, --package-manager [npm/yarn/pnpm/bun]",
    "choose the package manager",
    "npm"
  )
  .action(run);

interface Options {
  projectName: string;
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
}

async function run(name: string) {
  const currentModuleUrl = new URL(import.meta.url);
  const currentModulePath = url.fileURLToPath(currentModuleUrl);
  const appBaseDir = path.dirname(currentModulePath!);
  const cwd = process.cwd();
  const fullPath = path.resolve(cwd, name);
  const dirExists = fs.existsSync(fullPath);

  function logInfo() {
    console.log(`directory: ${fullPath}`);
    console.log(`${programInfo.name} version: ${programInfo.version}`);
  }

  if (dirExists) {
    console.error("error: directory already exists \n");
    logInfo();
    return;
  }

  async function copyDir(fromPath: string, toPath: string) {
    try {
      fs.mkdirSync(toPath);
      const files = fs.readdirSync(fromPath);

      for (const file of files) {
        const filePath = path.join(fromPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          await copyDir(filePath, path.join(toPath, file));
        } else {
          fs.copyFileSync(filePath, path.join(toPath, file));
        }
      }
    } catch (err) {
      console.error("error: failed to copy template \n");
      console.error(err);
      logInfo();
      fs.rmdirSync(toPath);
    }
  }

  const templatePath = path.join(appBaseDir, "..", "templates", "default");
  await copyDir(templatePath, fullPath);

  // 4. add the neccessary depencies based on the options
  // 5. test if the package manager works by checking the version
  // - if it does run the installation command
  // - if it doesn't switch back to the npm
  // 6. log the current status
}

program.parse();
