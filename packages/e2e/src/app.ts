import * as path from 'path';
import puppeteer, {Page} from 'puppeteer';
import {fileURLToPath} from 'url';
import {createServer} from 'vite';

const Root = fileURLToPath(new URL('.', import.meta.url));

export interface App {
  page: Page;
  stop: () => Promise<void>;
}

export async function start(): Promise<App> {
  console.log('starting test');

  const server = await createServer({
    root: Root,
    configFile: path.resolve(Root, '../vite.config.ts'),
  }).then(server => server.listen());

  console.log('server', server);

  const browser = await puppeteer.launch({
    headless: 'new',
  });

  console.log('browser', browser);

  const page = await browser.newPage();
  await page.goto(`http://localhost:${server.config.server.port}`);
  await page.waitForSelector('main');

  return {
    page,
    async stop() {
      await Promise.all([browser.close(), server.close()]);
    },
  };
}
