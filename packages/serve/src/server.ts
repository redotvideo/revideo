import {renderVideo} from '@revideo/renderer';
import express from 'express';
import {promises as fs} from 'fs'; // Use the promise-based version of fs
import path from 'path';
import {v4 as uuidv4} from 'uuid';

const App = express();
const Port = process.env.REVIDEO_PORT;

App.use(express.json());

App.post('/render', async (req, res) => {
  try {
    const {variables} = req.body;

    const tempProjectName = uuidv4();
    await renderVideo(
      process.env.PROJECT_FILE || '',
      variables,
      tempProjectName,
    );
    const resultFile = path.join(
      process.cwd(),
      `output/${tempProjectName}.mp4`,
    );

    res.sendFile(resultFile, err => {
      if (err) {
        if (!res.headersSent) {
          res.status(500).send('Error sending file.');
        }
      }
    });

    res.on('finish', async () => {
      try {
        await fs.unlink(resultFile);
        console.log(`Successfully deleted ${resultFile}`);
      } catch (unlinkErr) {
        console.error(`Error deleting file ${resultFile}:`, unlinkErr);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error during rendering: ${error}`);
  }
});

App.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
