#!/usr/bin/env node
//@ts-check
import {EventName, sendEvent} from '@revideo/telemetry';
import fs from 'fs';
import kleur from 'kleur';
import minimist from 'minimist';
import {fileURLToPath} from 'node:url';
import path from 'path';
import prompts from 'prompts';

const templates = [
  {
    value: 'saas-template',
    title: 'Revideo with Next.js (recommended)',
    description: 'An example project to get started with Revideo and Next.js.',
  },
  {
    value: 'default',
    title: 'Minial, standalone Revideo project',
    description: 'A minimal example to get started with Revideo.',
  },
];

async function run() {
  const options = minimist(process.argv.slice(2));

  prompts.override(options);
  const response = await prompts([
    // Prompt for project name
    {
      type: 'text',
      name: 'name',
      message: 'Project name',
      initial: 'my-revideo-project',
      validate: value =>
        isValidPackageName(value)
          ? true
          : 'Project name must be a valid npm package name.',
    },
    // Prompt for project path
    {
      type: 'text',
      name: 'path',
      message: 'Project path',

      initial: value => {
        return path.normalize(value.replace('@', ''));
      },

      validate: value => {
        let dir = path.normalize(value.trim());
        if (!fs.existsSync(dir)) {
          return true;
        }
        if (!fs.lstatSync(dir).isDirectory()) {
          return `Project path "${dir}" must be a valid directory.`;
        }
        if (fs.readdirSync(dir).length > 0) {
          return dir === '.'
            ? 'Current directory must be empty.'
            : `Target directory "${dir}" must be empty.`;
        }
        return true;
      },
      format: value => path.resolve(value),
    },
    // Prompt for which example to scaffold
    {
      type: 'select',
      name: 'starter',
      message: 'Choose a starter template',
      choices: templates,
    },
  ]);

  // Abort if the user didn't provide a project name
  if (!response.path) {
    console.log(kleur.red('× Scaffolding aborted by the user.\n'));
    return;
  }

  // Clone files
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    '..',
    `examples/${response.starter}`,
  );
  copyDirectory(templateDir, response.path);

  sendEvent(EventName.CreateCommand, {
    name: response.name,
    starter: response.starter,
  });

  // Read package.json and modify name
  try {
    const manifest = JSON.parse(
      fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
    );
    manifest.name = response.name;
    fs.writeFileSync(
      path.join(response.path, 'package.json'),
      JSON.stringify(manifest, undefined, 2),
    );
  } catch (e) {
    // Example doesn't have a package.json file
  }

  // Tell user that the process is complete
  const manager = getPackageManager();
  console.log(
    kleur.green(
      '\n√ Scaffolding complete. Run the following commands to get started:',
    ),
  );
  if (response.path !== process.cwd()) {
    console.log(
      `  ${kleur.bold('cd')} ${path.relative(process.cwd(), response.path)}`,
    );
  }

  const boldManager = kleur.bold(manager);

  if (response.starter == 'default') {
    if (manager === 'yarn') {
      console.log(`  ${boldManager}`);
      console.log(`  ${boldManager} start`);
    } else {
      console.log(`  ${boldManager} install`);
      console.log(`  ${boldManager} start`);
    }
  } else {
    if (manager === 'yarn') {
      console.log(kleur.blue('\n√ Start the NextJS server:'));
      console.log(`  ${kleur.bold('cd')} next`);
      console.log(`  ${boldManager}`);
      console.log(`  ${boldManager} run dev`);

      console.log(kleur.blue('\nIn parallel, serve your revideo project:'));
      console.log(`  ${kleur.bold('cd')} revideo`);
      console.log(`  ${boldManager}`);
      console.log(`  ${kleur.bold('npx')} revideo serve`);
    } else {
      console.log(kleur.blue('\nStart the NextJS server:'));
      console.log(`  ${kleur.bold('cd')} next`);
      console.log(`  ${boldManager} install`);
      console.log(`  ${boldManager} run dev`);

      console.log(kleur.blue('\nIn parallel, serve your revideo project:'));
      console.log(`  ${kleur.bold('cd')} revideo`);
      console.log(`  ${boldManager} install`);
      console.log(`  ${kleur.bold('npx')} revideo serve`);
    }
  }
  console.log();
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName,
  );
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, {recursive: true});
  for (const file of fs.readdirSync(src)) {
    const srcFile = path.resolve(src, file);
    const destFile = path.resolve(dest, file);
    copy(srcFile, destFile);
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDirectory(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function getPackageManager() {
  const ua = process.env.npm_config_user_agent;
  return ua?.split(' ')[0].split('/')[0] ?? 'npm';
}

void run().catch(e => {
  console.error(e);
  sendEvent(EventName.Error, {error: e});
  process.exit(1);
});
