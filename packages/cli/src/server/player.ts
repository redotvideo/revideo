import {spawn} from 'child_process';
import {watch} from 'chokidar';
import {Request, Response} from 'express';
import {promises as fs} from 'fs';

const YELLOW_DOT = '\u001b[33m•\u001b[0m';
const GREEN_CHECK = '\u001b[32m✔\u001b[0m';
const RED_CROSS = '\u001b[31m✘\u001b[0m';

const fileNotFoundMessage = (filePath: string) =>
  `${YELLOW_DOT} File ${filePath} not found. Building project...`;

const fileNotFoundAfterBuildingMessage = (filePath: string, padding: number) =>
  `\r${RED_CROSS} File ${filePath} still not found after building project...`.padEnd(
    padding,
    ' ',
  ) + '\n';

const fileChangedMessage = (filePath: string) =>
  `${YELLOW_DOT} File ${filePath} has changed. Rebuilding...`;

const successMessage = (time: number, padding: number) =>
  `\r${GREEN_CHECK} Project built successfully. ${time}ms`.padEnd(
    padding,
    ' ',
  ) + '\n';

/**
 * Runs `npm run build`.
 */
export async function buildProject() {
  const buildProcess = spawn('npm', ['run', 'build']);

  return new Promise<void>((resolve, reject) => {
    buildProcess.on('close', code => {
      if (code === 0) {
        resolve();
        return;
      }

      reject();
    });
  });
}

/**
 * Watches the given directory for changes and rebuilds the project on each change.
 * @param dir - Directory to watch for changes.
 */
export async function createHotReloader(dir: string) {
  const watcher = watch(dir, {
    ignored: ['**/*.meta'],
  });

  watcher.on('change', async path => {
    const rebuildingMessage = fileChangedMessage(path);
    process.stdout.write(rebuildingMessage);

    const start = Date.now();

    try {
      await buildProject();
      process.stdout.write(
        successMessage(Date.now() - start, rebuildingMessage.length + 1),
      );
    } catch (e) {
      // TODO: Add more detailed error message
      console.error(
        'Error building project. Try to run `npm run build` manually and check for errors.',
      );
    }
  });
}

export async function player(_: Request, res: Response) {
  const path = './dist/project.js';

  let buildTime: number | undefined = undefined;
  let error = false;

  // Check if the file exists and build the project if it doesn't.
  await fs.access(path).catch(async () => {
    buildTime = Date.now();
    process.stdout.write(fileNotFoundMessage(path));
    await buildProject();
  });

  // If the file still doesn't exist, send an error response.
  await fs.access(path).catch(() => {
    process.stdout.write(
      fileNotFoundAfterBuildingMessage(
        path,
        fileNotFoundMessage(path).length + 1,
      ),
    );
    res.status(500).send('Error building project');
    error = true;
  });

  if (error) {
    return;
  }

  // If we built the project, update the log message.
  if (buildTime) {
    process.stdout.write(
      successMessage(
        Date.now() - buildTime,
        fileNotFoundMessage(path).length + 1,
      ),
    );
  }

  return res.sendFile('./dist/project.js', {root: './'});
}
