#!/usr/bin/env node

import {Command} from 'commander';
import {createServer} from './server/index';
import {buildProject} from './server/player';

const program = new Command();

program
  .name('revideo')
  .description('CLI to interact with the revideo service')
  .version('0.2.13');

program
  .command('serve')
  .description('Start the revideo server.')
  .option('--projectFile <path>', 'Path to the project file')
  .option('--port <number>', 'Port on which to start the server', '4000')
  .action(async options => {
    await buildProject();

    if (!options.projectFile) {
      console.error('Error: --projectFile option must be specified.');
      process.exit(1);
    }
    const {projectFile, port} = options;
    process.env.PROJECT_FILE = projectFile;
    process.env.REVIDEO_PORT = port;

    createServer().listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });

program
  .command('dev')
  .description(
    'Start the revideo server in development mode. Watches for changes ' +
      'in the project directory and re-builds the player on each change.',
  )
  .option('--projectFile <path>', 'Path to the project file')
  .option('--port <number>', 'Port on which to start the server', '4000')
  .option('--watchDir <path>', 'Directory to watch for changes', 'src')
  .action(async options => {
    if (!options.projectFile) {
      console.error('Error: --projectFile option must be specified.');
      process.exit(1);
    }

    await buildProject().catch(() => {
      console.error('Error building project');
      process.exit(1);
    });

    const {projectFile, port} = options;
    process.env.PROJECT_FILE = projectFile;
    process.env.REVIDEO_PORT = port;

    createServer(options.watchDir).listen(port, () => {
      console.log(`Server listening on port ${port}`);
      console.log();
    });
  });

program.parse(process.argv);
