#!/usr/bin/env node

import {execSync} from 'child_process';
import {Command} from 'commander';
import path from 'path';

const Program = new Command();

Program.name('revideo')
  .description('CLI to interact with the revideo service')
  .version('1.0.0');

Program.command('serve')
  .description('Start the revideo server')
  .option('--projectFile <path>', 'Path to the project file')
  .option('--port <number>', 'Port on which to start the server', '5000')
  .action(options => {
    if (!options.projectFile) {
      console.error('Error: --projectFile option must be specified.');
      process.exit(1);
    }
    const {projectFile, port} = options;
    process.env.PROJECT_FILE = projectFile;
    process.env.REVIDEO_PORT = port;
    execSync(`node ${path.join(__dirname, './server.js')}`, {stdio: 'inherit'});
  });

Program.parse(process.argv);
