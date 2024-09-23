import preact from '@preact/preset-vite';
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
    preact({
      include: [
        /packages\/ui\/src\/(.*)\.tsx?$/,
        /packages\/2d\/src\/editor\/(.*)\.tsx?$/,
      ],
    }),
    motionCanvas({
      buildForEditor: false,
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
