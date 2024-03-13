import * as path from 'path';
import puppeteer from 'puppeteer';
import {createServer} from 'vite';

export const renderVideo = async (configFile: string) => {
  console.log('Rendering...');

  const resolvedConfigPath = path.resolve(process.cwd(), configFile);

  const [browser, server] = await Promise.all([
    puppeteer.launch({headless: true}),
    createServer({
      configFile: resolvedConfigPath,
      server: {
        port: 9000,
      },
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

  await page.goto(`http://localhost:${port}/render`);
  await page.exposeFunction('onRenderComplete', async () => {
    await Promise.all([browser.close(), server.close()]);
    console.log('Rendering complete.');
  });
};
