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
    value: 'default',
    title: 'Minimal, standalone Revideo project',
    description: 'A minimal example to get started with Revideo.',
    recommended: true,
    startcommands: 'default',
  },
  {
    value: 'saas-template',
    title: 'Revideo with Next.js',
    description: 'A minimal web app built with Revideo and Next.js.',
    recommended: true,
    startcommands: 'readme',
  },
  {
    value: 'avatar-with-background',
    title: 'Avatar with Background',
    description: 'Create an avatar with a custom background.',
    startcommands: 'default',
  },
  {
    value: 'github-stars-celebration',
    title: 'GitHub Stars Celebration',
    description: 'Animate a celebration of GitHub repository stars.',
    startcommands: 'default',
  },
  {
    value: 'marketing-templates',
    title: 'Marketing Templates',
    description: 'A collection of templates for marketing videos.',
    startcommands: 'readme',
  },
  {
    value: 'minimal-drag-drop',
    title: 'Drag and Drop Example',
    description:
      'A minimal example of an editor with drag-and-drop editing functionality.',
    startcommands: 'readme',
  },
  {
    value: 'parallelized-aws-lambda',
    title: 'Parallelized AWS Lambda',
    description: 'Example of parallelized rendering using AWS Lambda.',
    startcommands: 'readme',
  },
  {
    value: 'rive-explanation-video',
    title: 'Rive Explanation Video',
    description: 'Create a code explanation video along with Rive animations.',
    startcommands: 'default',
  },
  {
    value: 'stitching-videos',
    title: 'Stitching Videos',
    description: 'Example of how to concatenate multiple videos together.',
    startcommands: 'default',
  },
  {
    value: 'three-js-example',
    title: 'Three.js Example',
    description: 'Integrate Three.js with Revideo for 3D animations.',
    startcommands: 'default',
  },
  {
    value: 'youtube-shorts',
    title: 'YouTube Shorts',
    description: 'Template for creating YouTube Shorts videos.',
    startcommands: 'default',
  },
];

async function run() {
  const options = minimist(process.argv.slice(2));

  const templateFlag = Object.keys(options).find(key =>
    templates.some(template => template.value === key),
  );

  const pathResponse = await prompts([
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
  ]);

  console.log(); // linebreak for better readability

  let templateResponse;
  if (templateFlag) {
    templateResponse = {starter: templateFlag};
  } else {
    // Prompt for which example to scaffold
    templateResponse = await prompts([
      {
        type: 'select',
        name: 'starter',
        message: 'Choose a starter template',
        choices: templates.map(template => ({
          title: template.recommended
            ? template.title + kleur.bold(' (Recommended)')
            : template.title,
          value: template.value,
          description: template.description,
        })),
      },
    ]);
  }

  const response = {...pathResponse, ...templateResponse};

  // Abort if the user didn't provide a project name
  if (!response.path) {
    console.log(kleur.red('× Scaffolding aborted by the user.\n'));
    return;
  }

  console.log('Scaffolding, this can take a few seconds...');

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
  const installCommand =
    manager === 'yarn' ? `  ${boldManager}` : `  ${boldManager} install`;

  const selectedTemplate = getTemplate(response.starter);

  if (!selectedTemplate) {
    throw Error(`Template ${response.starter.name} does not exist`);
  }

  if (selectedTemplate.startcommands === 'default') {
    console.log(installCommand);
    console.log(`  ${boldManager} start`);
  } else {
    console.log(kleur.blue('\nNow find the setup instructions in README.md'));
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

function getTemplate(value) {
  return templates.find(template => template.value === value);
}

void run().catch(e => {
  console.error(e);
  sendEvent(EventName.Error, {error: e});
  process.exit(1);
});
