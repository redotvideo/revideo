import * as path from 'path';
import puppeteer from 'puppeteer';
import {createServer} from 'vite';
import {rendererPlugin} from './plugin';

function buildUrl(
  port: number,
  fileName: string,
  workerId: number,
  totalNumOfWorkers: number,
) {
  return `http://localhost:${port}/render?fileName=${fileName}&workerId=${workerId}&totalNumOfWorkers=${totalNumOfWorkers}`;
}

async function renderWorker(
  fixedPort: number,
  resolvedConfigPath: string,
  url: string,
  params?: Record<string, unknown>,
) {
  const [browser, server] = await Promise.all([
    puppeteer.launch({headless: true}),
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

  await page.goto(url);
  return new Promise<void>((res, rej) => {
    return page
      .exposeFunction('onRenderComplete', async () => {
        await Promise.all([browser.close(), server.close()]).catch(rej);
        console.log('Rendering complete.');
        res();
      })
      .catch(rej);
  });
}

export const renderVideo = async (
  configFile: string,
  params?: Record<string, unknown>,
) => {
  console.log('Rendering...');

  const resolvedConfigPath = path.resolve(process.cwd(), configFile);
  const numOfWorkers = 1;

  const promises = [];
  for (let i = 0; i < numOfWorkers; i++) {
    const url = buildUrl(9000 + i, 'video-' + i, i, numOfWorkers);
    promises.push(renderWorker(9000 + i, resolvedConfigPath, url, params));
  }

  return Promise.all(promises);
};
