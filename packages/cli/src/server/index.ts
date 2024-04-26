import express from 'express';
import {download} from './download';
import {render} from './render';

export const app = express();

app.use(express.json());

app.post('/render', render);
app.get('/download/:projectName', download);
