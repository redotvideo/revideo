import motionCanvas from '@revideo/vite-plugin';
import {createServer} from 'vite';

export async function launchEditor(projectPath: string, port: string) {
  const server = await createServer({
    configFile: false,
    plugins: [
      motionCanvas({
        project: projectPath,
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
    server: {
      port: parseInt(port),
    },
  });

  return server.listen();
}
