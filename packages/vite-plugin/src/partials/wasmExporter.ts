import * as fs from 'fs';
import path from 'path';
import {Readable} from 'stream';
import {Plugin} from 'vite';

export function wasmExporterPlugin(): Plugin {
  return {
    name: 'revideo:mp4-wasm',

    configureServer(server) {
      // Virtual file for mp4-wasm
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url === '/@mp4-wasm') {
          const pathNew = path.dirname(require.resolve('mp4-wasm'));
          const filePath = path.resolve(pathNew, 'mp4.wasm');
          const file = await fs.promises.readFile(filePath);

          res.setHeader('Content-Type', 'application/wasm');
          Readable.from(file).pipe(res);
          return;
        }

        next();
      });

      // Endpoint to download the video file from the client
      server.middlewares.use('/uploadVideoFile', async (req, res, next) => {
        if (req.method === 'POST') {
          const uploadPath = path.join(process.cwd(), 'uploads');
          const filePath = path.join(uploadPath, 'video.mp4');

          const start = Date.now();

          try {
            await fs.promises.mkdir(uploadPath, {recursive: true});
            const writeStream = fs.createWriteStream(filePath);

            await new Promise((resolve, reject) => {
              req.on('data', chunk => writeStream.write(chunk));
              req.on('end', resolve);
              req.on('error', reject);
            });

            writeStream.end();

            console.log('Video uploaded:', filePath);
            res.statusCode = 200;
            res.end();
            console.log(`Uploading took ${(Date.now() - start) / 1000}s`);
          } catch (err) {
            console.error('Error uploading video:', err);
            res.statusCode = 500;
            res.end();
          }
        } else {
          next();
        }
      });
    },
  };
}
