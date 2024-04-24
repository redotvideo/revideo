import * as path from 'path';
import puppeteer, {BrowserLaunchArgumentOptions} from 'puppeteer';
import * as readline from 'readline';
import {createServer} from 'vite';
import {rendererPlugin} from './plugin';

function buildUrl(
  port: number,
  fileName: string,
  workerId: number,
  totalNumOfWorkers: number,
  startInSeconds: number,
  endInSeconds?: number,
) {
  return `http://localhost:${port}/render?fileName=${fileName}&workerId=${workerId}&totalNumOfWorkers=${totalNumOfWorkers}&startInSeconds=${startInSeconds}&endInSeconds=${endInSeconds}`;
}

async function renderWorker(
  fixedPort: number,
  resolvedConfigPath: string,
  url: string,
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

interface RenderVideoSettings {
  // Name of the video file
  name?: string;
  startInSeconds?: number;
  endInSeconds?: number;
  puppeteer?: BrowserLaunchArgumentOptions;
}

export const renderVideo = async (
  configFile: string,
  params?: Record<string, unknown>,
  settings: RenderVideoSettings = {},
) => {
  console.log('Rendering...');

  const resolvedConfigPath = path.resolve(process.cwd(), configFile);

  /**
   * TODO: Change this in the future after more testing.
   * We still need to concate the videos together after rendering.
   */
  const numOfWorkers = 1;

  const promises = [];
  for (let i = 0; i < numOfWorkers; i++) {
    const url = buildUrl(
      9000 + i,
      settings.name ?? 'project',
      i,
      numOfWorkers,
      settings.startInSeconds ?? 0,
      settings.endInSeconds ?? Infinity,
    );
    promises.push(
      renderWorker(
        9000 + i,
        resolvedConfigPath,
        url,
        params,
        settings.puppeteer,
      ),
    );
  }

  return Promise.all(promises);
};
