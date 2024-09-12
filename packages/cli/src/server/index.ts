import cors from 'cors';
import express from 'express';
import {download} from './download';
import {render} from './render';

export function createServer() {
  const app = express();

  app.use(express.json({limit: '50mb'}));
  app.use(cors());

  app.post('/render', render);
  app.get('/download/:projectName', download);

  return app;
}
