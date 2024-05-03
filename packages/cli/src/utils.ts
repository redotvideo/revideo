import {promises as fs} from 'fs';

export function scheduleCleanup(filePath: string) {
  const clean = async () => {
    try {
      await fs.unlink(filePath);
      console.log(`Successfully deleted file: ${filePath}`);
    } catch (error) {
      console.error(`Error deleting file ${filePath}: ${error}`);
    }
  };

  // Wait 10 minutes before removing file.
  setTimeout(clean, 10 * 60 * 1000);
}
