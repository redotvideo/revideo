/**
 * This script is run after the package is installed.
 * It creates a file in the local npm package directory that contains a uuid4 string.
 * It is used to identify the installation of the package when sending telemetry data.
 *
 * Telemetry can be disabled by running Revideo with the environment variable DISABLE_TELEMETRY=true
 */

const fs = require('fs');
const {v4: uuidv4} = require('uuid');

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
