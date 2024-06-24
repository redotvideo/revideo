import formidable, {IncomingForm} from 'formidable';
import * as fs from 'fs';
import * as os from 'os';
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
      server.middlewares.use('/uploadVideoFile', async (req, res) => {
        if (req.method === 'POST') {
          const form = new IncomingForm();

          form.parse(req, async (err, fields, files) => {
            if (err) {
              console.error('Error parsing form:', err);
              res.statusCode = 500;
              res.end();
              return;
            }

            try {
              const tempDir = fields.tempDir![0];
              const file = files.file![0] as formidable.File;

              const outputPath = path.join(os.tmpdir(), tempDir, 'visuals.mp4');
              const writeStream = fs.createWriteStream(outputPath);

              await new Promise((resolve, reject) => {
                fs.createReadStream(file.filepath)
                  .pipe(writeStream)
                  .on('finish', resolve)
                  .on('error', reject);
              });

              res.statusCode = 200;
              res.end();
            } catch (err) {
              console.error('Error uploading video:', err);
              res.statusCode = 500;
              res.end();
            }
          });
        }
      });
    },
  };
}
