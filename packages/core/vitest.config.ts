import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
