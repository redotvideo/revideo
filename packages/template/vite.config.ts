import preact from '@preact/preset-vite';
import ffmpeg from '@revideo/ffmpeg';
import markdown from '@revideo/internal/vite/markdown-literals';
import {defineConfig} from 'vite';
import motionCanvas from '../vite-plugin/src/main';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@revideo/ui',
        replacement: '@revideo/ui/src/main.tsx',
      },
      {
        find: '@revideo/2d/editor',
        replacement: '@revideo/2d/src/editor',
      },
      {
        find: /@revideo\/2d(\/lib)?/,
        replacement: '@revideo/2d/src/lib',
      },
      {find: '@revideo/core', replacement: '@revideo/core/src'},
    ],
  },
  plugins: [
    markdown(),
    ffmpeg(),
    preact({
      include: [
        /packages\/ui\/src\/(.*)\.tsx?$/,
        /packages\/2d\/src\/editor\/(.*)\.tsx?$/,
      ],
    }),
    motionCanvas({
      buildForEditor: true,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
