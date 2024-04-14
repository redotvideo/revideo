/**
 * This script is run after the package is installed.
 * It creates a file in the local npm package directory that contains a uuid4 string.
 * It is used to identify the installation of the package when sending telemetry data.
 *
 * Teletry can be disabled by running Revideo with the environment variable DISABLE_TELEMETRY=true
 */

import fs from 'fs';
import {v4 as uuidv4} from 'uuid';

function Run() {
  if (fs.existsSync('./id.txt')) {
    return;
  }

  const uuid = uuidv4();
  fs.writeFileSync('./id.txt', uuid);
}

try {
  Run();
} catch (e) {
  // no-op
}
