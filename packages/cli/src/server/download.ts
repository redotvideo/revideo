import type {Request, Response} from 'express';
import {promises as fs} from 'fs';
import path from 'path';

export async function download(req: Request, res: Response) {
  const {projectName} = req.params;
  const resultFilePath = path.join(process.cwd(), `output/${projectName}`);

  try {
    await fs.access(resultFilePath);
    res.download(resultFilePath, `${projectName}`, async err => {
      if (err) {
        console.error(err);
        res.status(500).send('Error downloading the file.');
      }
    });
  } catch (error) {
    console.error(`File not found ${resultFilePath}:`, error);
    res.status(404).send('File not found.');
  }
}
