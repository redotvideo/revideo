import motionCanvas from '@revideo/vite-plugin';
import {watch} from 'chokidar';
import {Request, Response} from 'express';
import {promises as fs} from 'fs';
import {build} from 'vite';

const YELLOW_DOT = '\u001b[33m•\u001b[0m';
const GREEN_CHECK = '\u001b[32m✔\u001b[0m';
const RED_CROSS = '\u001b[31m✘\u001b[0m';

const PLAYER_FILE_NAME = (process.env.PROJECT_FILE ?? '')
  .split('/')
  .pop()
  ?.replace('.ts', '.js');

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

export async function buildProject() {
  try {
    await build({
      configFile: false,
      plugins: [motionCanvas({project: process.env.PROJECT_FILE})],
      build: {
        outDir: 'dist',
        rollupOptions: {
          output: {
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
          },
        },
      },
    });
  } catch (error) {
    console.error('Error building project:', error);
    throw error;
  }
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

export async function player(req: Request, res: Response) {
  let path = `./dist/${req.params.file}`;

  if (req.params.file === 'projectFile') {
    path = `./dist/${PLAYER_FILE_NAME}`;
  }

  let buildTime: number | undefined = undefined;
  let error = false;

  // Check if the file exists and build the project if it doesn't.
  await fs.access(path).catch(async () => {
    buildTime = Date.now();
    process.stdout.write(fileNotFoundMessage(path));
    await buildProject().catch(() => {
      res.status(500).send('Error building project');
    });
  });

  // If the file still doesn't exist, send an error response.
  await fs.access(path).catch(() => {
    process.stdout.write(
      fileNotFoundAfterBuildingMessage(
        path,
        fileNotFoundMessage(path).length + 1,
      ),
    );
    res.status(404).send(`File ${path} not found`);
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

  return res.sendFile(path, {root: './'});
}
