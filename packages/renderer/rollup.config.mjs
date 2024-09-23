import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: 'server/index.ts',
    output: [
      {
        file: 'lib/server/index.cjs.js',
        format: 'cjs',
        // banner:
        // '// https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated' +
        // "process.env.VITE_CJS_IGNORE_WARNING = 'true';",
      },
      {
        file: 'lib/server/index.mjs',
        format: 'es',
      },
    ],
    plugins: [
      typescript({
        tsconfig: 'server/tsconfig.json',
        declaration: true,
        declarationDir: 'lib/server/types',
      }),
      nodeResolve({
        preferBuiltins: false,
      }),
      commonjs(),
      json(),
    ],
    external: ['lightningcss', 'puppeteer', 'vite', '@revideo/ffmpeg'],
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    },
  },
  {
    input: 'lib/server/types/index.d.ts',
    output: [{file: 'lib/server/index.d.ts', format: 'es'}],
    plugins: [dts()],
  },
];

export default config;
