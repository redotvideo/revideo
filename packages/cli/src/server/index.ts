import cors from 'cors';
import express from 'express';
import {download} from './download';
import {createHotReloader, player} from './player';
import {render} from './render';

export function createServer(hotReloadDir?: string) {
  const app = express();

  app.use(express.json({limit: '50mb'}));
  app.use(cors());

  app.post('/render', render);
  app.get('/download/:projectName', download);
  app.get('/player/*', player);

  if (hotReloadDir) {
    createHotReloader(hotReloadDir);
  }

  return app;
}
