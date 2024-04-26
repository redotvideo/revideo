import ffmpeg from '@revideo/ffmpeg';
import motionCanvas from '@revideo/vite-plugin';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [motionCanvas(), ffmpeg()],
});
