import {renderVideo} from '@revideo/renderer';
import axios from 'axios';
import {Request, Response} from 'express';
import path from 'path';
import {v4 as uuidv4} from 'uuid';
import {scheduleCleanup} from '../utils';

export async function render(req: Request, res: Response) {
  const {callbackUrl} = req.body;
  if (callbackUrl) {
    await renderWithCallback(req, res);
  } else {
    await renderWithoutCallback(req, res);
  }
}

async function renderWithCallback(req: Request, res: Response) {
  const {variables, callbackUrl, settings} = req.body;
  const tempProjectName = uuidv4();
  res.json({tempProjectName});

  try {
    await renderVideo(process.env.PROJECT_FILE || '', variables, () => {}, {
      ...settings,
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
        tempProjectName,
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
        tempProjectName,
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

async function renderWithoutCallback(req: Request, res: Response) {
  const {variables, streamProgress, settings} = req.body;
  const tempProjectName = uuidv4();
  const resultFilePath = path.join(
    process.cwd(),
    `output/${tempProjectName}.mp4`,
  );

  if (streamProgress) {
    res.writeHead(200, {
      // eslint-disable-next-line
      'Content-Type': 'text/event-stream',
      // eslint-disable-next-line
      'Cache-Control': 'no-cache',
      // eslint-disable-next-line
      Connection: 'keep-alive',
    });

    const sendProgress = (worker: number, progress: number) => {
      res.write(`event: progress\n`);
      res.write(`data: ${JSON.stringify({worker, progress})}\n\n`);
    };

    try {
      await renderVideo(
        process.env.PROJECT_FILE || '',
        variables,
        sendProgress,
        {
          ...settings,
          name: tempProjectName,
        },
      );

      const downloadLink = `${req.protocol}://${req.get('host')}/download/${tempProjectName}.mp4`;
      res.write(`event: completed\n`);
      res.write(
        `data: ${JSON.stringify({status: 'success', downloadLink})}\n\n`,
      );
      res.end();
      scheduleCleanup(resultFilePath);
    } catch (error: any) {
      console.error(error);
      res.write(`event: error\n`);
      res.write(
        `data: ${JSON.stringify({status: 'error', message: error.message})}\n\n`,
      );
      res.end();
    }
  } else {
    try {
      await renderVideo(process.env.PROJECT_FILE || '', variables, () => {}, {
        name: tempProjectName,
      });

      const downloadLink = `${req.protocol}://${req.get('host')}/download/${tempProjectName}.mp4`;

      res.json({
        status: 'success',
        downloadLink: downloadLink,
      });
      scheduleCleanup(resultFilePath);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}
