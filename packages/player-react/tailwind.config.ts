import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: 'p-',
  theme: {
    extend: {
      backgroundImage: {
        // eslint-disable-next-line
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // eslint-disable-next-line
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
