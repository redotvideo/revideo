/* eslint-disable */
import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F3F3F3',
          200: '#E5E5E5',
          300: '#C7C7C7',
          400: '#ACACAC',
          500: '#808080',
          600: '#5F5F5F',
          700: '#4E4E4E',
          800: '#373737',
          900: '#2A2A2A',
          950: '#151515',
        },
      },
    },
  },
  plugins: [],
};
export default config;
