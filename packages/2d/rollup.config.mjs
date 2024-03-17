import typescript from '@revideo/internal/rollup/typescript.mjs';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/lib/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      {
        resolveId(id) {
          if (id.startsWith('@revideo/core')) {
            return {
              id: '@revideo/core',
              external: true,
            };
          }
        },
      },
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './src/lib/tsconfig.json',
        compilerOptions: {
          composite: false,
        },
      }),
      terser(),
    ],
  },
];
