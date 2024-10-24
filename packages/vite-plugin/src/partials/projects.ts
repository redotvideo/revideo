import type {Plugin} from 'vite';
import type {PluginOptions} from '../plugins';
import type {Projects} from '../utils';
// import {getVersions} from '../versions';

interface ProjectPluginConfig {
  buildForEditor?: boolean;
  plugins: PluginOptions[];
  projects: Projects;
}

export function projectsPlugin({
  buildForEditor,
  projects,
}: ProjectPluginConfig): Plugin {
  // TODO(refactor): use version information
  // const versions = JSON.stringify(getVersions());
  return {
    name: 'revideo:project',

    config(config) {
      return {
        build: {
          target: buildForEditor ? 'esnext' : 'modules',
          assetsDir: './',
          rollupOptions: {
            preserveEntrySignatures: 'strict',
            input: Object.fromEntries(
              projects.list.map(project => [project.name, project.url]),
            ),
          },
        },
        server: {
          port: config?.server?.port ?? 9000,
        },
        esbuild: {
          jsx: 'automatic',
          jsxImportSource: '@revideo/2d/lib',
        },
        optimizeDeps: {
          entries: projects.list.map(project => project.url),
          exclude: ['preact', 'preact/*', '@preact/signals'],
        },
      };
    },
  };
}
