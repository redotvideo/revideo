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
});

App.get('/download/:projectName', async (req, res) => {
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
});

App.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

function scheduleCleanup(filePath: string) {
  // wait 10 minutes before removing file
  setTimeout(
    async () => {
      try {
        await fs.unlink(filePath);
        console.log(`Successfully deleted file: ${filePath}`);
      } catch (error) {
        console.error(`Error deleting file ${filePath}: ${error}`);
      }
    },
    10 * 60 * 1000,
  );
}
