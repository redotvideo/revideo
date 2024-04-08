import * as path from 'path';
import puppeteer from 'puppeteer';
import {createServer} from 'vite';
import {rendererPlugin} from './plugin';

export const renderVideo = async (
  configFile: string,
  params?: Record<string, unknown>,
  outName: string = 'project',
) => {
  console.log('Rendering...');

  const resolvedConfigPath = path.resolve(process.cwd(), configFile);

  const [browser, server] = await Promise.all([
    puppeteer.launch({headless: true}),
    createServer({
      configFile: resolvedConfigPath,
      server: {
        port: 9000,
      },
      plugins: [rendererPlugin(params, outName)],
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

  const renderingComplete = new Promise<void>((resolve, reject) => {
    page.exposeFunction('onRenderComplete', async () => {
      await Promise.all([browser.close(), server.close()]);
      console.log('Rendering complete.');
      resolve();
    });

    page.exposeFunction('onRenderFailed', async (errorMessage: string) => {
      await Promise.all([browser.close(), server.close()]);
      console.error('Rendering failed:', errorMessage);
      reject(new Error(errorMessage));
    });
  });

  await page.goto(`http://localhost:${port}/render`);

  await renderingComplete;
};
