import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    tailwindcss,
    cssnano,
  ],
};

export default config;