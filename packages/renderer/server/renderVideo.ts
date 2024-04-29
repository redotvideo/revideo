import {
  concatenateMedia,
  createSilentAudioFile,
  doesFileExist,
  getVideoDuration,
  mergeAudioWithVideo,
} from '@revideo/ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import puppeteer, {Browser, BrowserLaunchArgumentOptions} from 'puppeteer';
import * as readline from 'readline';
import {v4 as uuidv4} from 'uuid';
import {ViteDevServer, createServer} from 'vite';
import {rendererPlugin} from './RendererPlugin';

function buildUrl(
  port: number,
  fileName: string,
  workerId: number,
  totalNumOfWorkers: number,
  range: [number, number] = [0, Infinity],
  hiddenFolderId: string,
) {
  return `http://localhost:${port}/render?fileName=${fileName}&workerId=${workerId}&totalNumOfWorkers=${totalNumOfWorkers}&startInSeconds=${range[0]}&endInSeconds=${range[1]}&hiddenFolderId=${hiddenFolderId}`;
}

interface RenderVideoSettings {
  // Name of the video file
  name?: string;

  // Start and end in seconds
  range?: [number, number];

  puppeteer?: BrowserLaunchArgumentOptions;
  workers?: number;
}

export const renderVideo = async (
  configFile: string,
  params?: Record<string, unknown>,
  settings: RenderVideoSettings = {},
) => {
  console.log('Rendering...');

  const resolvedConfigPath = path.resolve(process.cwd(), configFile);
  const projectName = settings.name ?? 'project';
  const hiddenFolderId = uuidv4();

  const numOfWorkers = settings.workers ?? 1;
  const renderPromises = [];

  for (let i = 0; i < numOfWorkers; i++) {
    const port = 9000 + i;
    renderPromises.push(
      initBrowserAndServer(
        port,
        resolvedConfigPath,
        params,
        settings.puppeteer,
      ).then(({browser, server}) => {
        const url = buildUrl(
          port,
          `${projectName}-${i}`,
          i,
          numOfWorkers,
          settings.range,
          hiddenFolderId,
        );
        return renderVideoOnPage(browser, server, url);
      }),
    );
  }

  await Promise.all(renderPromises);
  const audioFiles = [];
  const videoFiles = [];
  for (let i = 0; i < numOfWorkers; i++) {
    const videoFilePath = `${os.tmpdir()}/revideo-${projectName}-${i}-${hiddenFolderId}/visuals.mp4`;
    const audioFilePath = `${os.tmpdir()}/revideo-${projectName}-${i}-${hiddenFolderId}/audio.wav`;

    if (!(await doesFileExist(audioFilePath))) {
      const videoDuration = await getVideoDuration(videoFilePath);
      await createSilentAudioFile(audioFilePath, videoDuration);
    }
    videoFiles.push(videoFilePath);
    audioFiles.push(audioFilePath);
  }

  await concatenateMedia(
    videoFiles,
    path.join(process.cwd(), `output/${projectName}-visuals.mp4`),
  );
  await concatenateMedia(
    audioFiles,
    path.join(process.cwd(), `output/${projectName}-audio.wav`),
  );

  await mergeAudioWithVideo(
    path.join(process.cwd(), `output/${projectName}-audio.wav`),
    path.join(process.cwd(), `output/${projectName}-visuals.mp4`),
    path.join(process.cwd(), `output/${projectName}.mp4`),
  );
  console.log(
    `\nRendered successfully! Video saved to: ${path.join(process.cwd(), `output/${projectName}.mp4`)}`,
  );

  await cleanup(projectName, numOfWorkers, hiddenFolderId);
};

async function initBrowserAndServer(
  fixedPort: number,
  resolvedConfigPath: string,
  params?: Record<string, unknown>,
  puppeteerOptions?: BrowserLaunchArgumentOptions,
) {
  const [browser, server] = await Promise.all([
    puppeteer.launch({headless: true, ...puppeteerOptions}),
    createServer({
      configFile: resolvedConfigPath,
      server: {
        port: fixedPort,
      },
      plugins: [rendererPlugin(params)],
    }).then(server => server.listen()),
  ]);

  if (!server.httpServer) {
    throw new Error('HTTP server is not initialized');
  }
  const address = server.httpServer.address();
  const port = address && typeof address === 'object' ? address.port : null;
  if (port === null) {
    throw new Error('Server address is null');
  }

  return {browser, server, port};
}

async function renderVideoOnPage(
  browser: Browser,
  server: ViteDevServer,
  url: string,
) {
  const page = await browser.newPage();
  if (!server.httpServer) {
    throw new Error('HTTP server is not initialized');
  }
  const address = server.httpServer.address();
  const port = address && typeof address === 'object' ? address.port : null;
  if (port === null) {
    throw new Error('Server address is null');
  }

  // Attach logs from puppeteer to the console
  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i) {
      console.log(`${port}: ${msg.args()[i]}`);
    }
  });

  page.exposeFunction('logProgress', (progress: number) => {
    const percentage = Math.floor(progress * 100);
    const barLength = 20;
    const filledLength = Math.floor((percentage / 100) * barLength);
    const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength);
    const consoleLine = process.stdout.rows + port - 9000;

    readline.cursorTo(process.stdout, 0, consoleLine);
    readline.clearLine(process.stdout, 0);
    process.stdout.write(
      `Progress for worker on port ${port}: [${bar}] ${percentage}%`,
    );
  });

  const renderingComplete = new Promise<void>((resolve, reject) => {
    page.exposeFunction('onRenderComplete', async () => {
      await Promise.all([browser.close(), server.close()]);
      resolve();
    });

    page.exposeFunction('onRenderFailed', async (errorMessage: string) => {
      await Promise.all([browser.close(), server.close()]);
      console.error('Rendering failed:', errorMessage);
      reject(new Error(errorMessage));
    });
  });

  await page.goto(url);

  return renderingComplete;
}

async function cleanup(
  projectName: string,
  numOfWorkers: number,
  hiddenFolderId: string,
) {
  const cleanupFolders = [];
  const cleanupFiles = [];
  for (let i = 0; i < numOfWorkers; i++) {
    cleanupFolders.push(
      `${os.tmpdir()}/revideo-${projectName}-${i}-${hiddenFolderId}`,
    );
    cleanupFiles.push(
      path.join(process.cwd(), `output/${projectName}-${i}.mp4`),
    );
  }

  cleanupFiles.push(
    path.join(process.cwd(), `output/${projectName}-audio.wav`),
  );
  cleanupFiles.push(
    path.join(process.cwd(), `output/${projectName}-visuals.mp4`),
  );

  const folderCleanupPromises = cleanupFolders.map(folder =>
    fs.promises
      .rm(folder, {recursive: true, force: true})
      .catch(err =>
        console.error(`Error during cleanup, couldn't remove ${folder}:`, err),
      ),
  );

  const fileCleanupPromises = cleanupFiles.map(file =>
    fs.promises
      .unlink(file)
      .catch(err =>
        console.error(`Error during cleanup, couldn't remove ${file}:`, err),
      ),
  );

  await Promise.all([...folderCleanupPromises, ...fileCleanupPromises]);
}
