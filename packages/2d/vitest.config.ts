import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    include: ['./src/lib/**/*.test.*'],
    environment: 'jsdom',
  },
});
