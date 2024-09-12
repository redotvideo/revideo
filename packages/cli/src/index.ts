#!/usr/bin/env node

import {EventName, sendEvent} from '@revideo/telemetry';
import {Command} from 'commander';
import {createServer} from './server/index';

const program = new Command();

program
  .name('revideo')
  .description('CLI to interact with the revideo service')
  .version('0.5.7');

program
  .command('serve')
  .description(
    'UNSTABLE (still WIP): Start the revideo server in development mode. Watches for changes ' +
      'in the project directory and re-builds the player on each change.',
  )
  .option(
    '--projectFile <path>',
    'Path to the project file',
    './src/project.ts',
  )
  .option('--port <number>', 'Port on which to start the server', '4000')
  .action(async options => {
    sendEvent(EventName.CLICommand);

    const {projectFile, port} = options;
    process.env.PROJECT_FILE = projectFile;
    process.env.REVIDEO_PORT = port;

    createServer().listen(port, () => {
      console.log(`Server listening on port ${port}`);
      console.log();
    });
  });

program.parse(process.argv);
