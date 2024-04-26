#!/usr/bin/env node

import {Command} from 'commander';
import {app} from './server/index';

const program = new Command();

program
  .name('revideo')
  .description('CLI to interact with the revideo service')
  .version('0.2.13');

program
  .command('serve')
  .description('Start the revideo server')
  .option('--projectFile <path>', 'Path to the project file')
  .option('--port <number>', 'Port on which to start the server', '4000')
  .action(options => {
    if (!options.projectFile) {
      console.error('Error: --projectFile option must be specified.');
      process.exit(1);
    }
    const {projectFile, port} = options;
    process.env.PROJECT_FILE = projectFile;
    process.env.REVIDEO_PORT = port;

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });

program.parse(process.argv);
