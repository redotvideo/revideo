/**
 * This script is run after the package is installed.
 * It creates a file in the local npm package directory that contains a uuid4 string.
 * It is used to identify the installation of the package when sending telemetry data.
 *
 * Telemetry can be disabled by running Revideo with the environment variable DISABLE_TELEMETRY=true
 */

const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const idPath = path.resolve(os.homedir(), '.revideo/id.txt');
const outputDirectory = path.dirname(idPath);

function Run() {
  if (fs.existsSync(idPath)) {
    return;
  }

  const uuid = uuidv4();

  fs.mkdirSync(outputDirectory, {recursive: true});
  fs.writeFileSync(idPath, uuid);
}

try {
  Run();
} catch (e) {
  // no-op
}
