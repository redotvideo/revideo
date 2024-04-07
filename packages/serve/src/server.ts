import {renderVideo} from '@revideo/renderer';
import axios from 'axios';
import express from 'express';
import {promises as fs} from 'fs';
import path from 'path';
import {v4 as uuidv4} from 'uuid';

const App = express();
const Port = process.env.REVIDEO_PORT || 3000;

App.use(express.json());

App.post('/render', async (req, res) => {
  const {variables, callbackUrl} = req.body;
  if (!callbackUrl) {
    return res.status(400).send('Callback URL is required.');
  }

  const jobId = uuidv4();
  res.json({jobId});

  try {
    const tempProjectName = uuidv4();
    await renderVideo(
      process.env.PROJECT_FILE || '',
      variables,
      tempProjectName,
    );

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

    App.get(`/download/${tempProjectName}.mp4`, (_req, res) => {
      console.log('received download request');
      res.download(resultFilePath, `${tempProjectName}.mp4`, async err => {
        if (err) {
          console.error(err);
        }
      });
    });

    scheduleCleanup(resultFilePath, `/download/${tempProjectName}.mp4`, App);
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
});

App.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

function scheduleCleanup(
  filePath: string,
  routePath: string,
  app: express.Express,
) {
  setTimeout(
    async () => {
      try {
        await fs.unlink(filePath);
        console.log(`Successfully deleted file: ${filePath}`);
      } catch (error) {
        console.error(`Error deleting file ${filePath}: ${error}`);
      }

      app._router.stack = app._router.stack.filter((layer: any) => {
        if (layer.route) {
          return layer.route.path !== routePath;
        }
        return true;
      });

      console.log(`Successfully removed route: ${routePath}`);
    },
    1 * 60 * 1000,
  ); // 1 minute
}
