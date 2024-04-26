import {renderVideo} from '@revideo/renderer';
import axios from 'axios';
import {Request, Response} from 'express';
import path from 'path';
import {v4 as uuidv4} from 'uuid';
import {scheduleCleanup} from '../utils';

export async function render(req: Request, res: Response) {
  const {variables, callbackUrl} = req.body;
  if (!callbackUrl) {
    return res.status(400).send('Callback URL is required.');
  }

  const jobId = uuidv4();
  res.json({jobId});

  try {
    const tempProjectName = uuidv4();
    await renderVideo(process.env.PROJECT_FILE || '', variables, {
      name: tempProjectName,
    });

    const resultFilePath = path.join(
      process.cwd(),
      `output/${tempProjectName}.mp4`,
    );

    const downloadLink = `${req.protocol}://${req.get('host')}/download/${tempProjectName}.mp4`;

    const response = await axios.post(
      callbackUrl,
      {
        jobId,
        status: 'success',
        downloadLink,
      },
      {
        headers: {
          // eslint-disable-next-line
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status !== 200) {
      throw new Error('Callback URL responded with an error');
    }

    scheduleCleanup(resultFilePath);
  } catch (error: any) {
    console.error(error);
    await axios.post(
      callbackUrl,
      {
        jobId,
        status: 'error',
        error: error.message,
      },
      {
        headers: {
          // eslint-disable-next-line
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
