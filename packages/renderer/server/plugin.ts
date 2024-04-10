import * as fs from 'fs';
import * as path from 'path';
import {Plugin} from 'vite';

const RendererPath = path.resolve(__dirname, 'renderer.html');
const Content = fs.readFileSync(RendererPath, 'utf-8');
const HtmlParts = Content.toString().split('{{source}}');

function createHtml(src: string) {
  return HtmlParts[0] + src + HtmlParts[1];
}

export function rendererPlugin(
  params?: Record<string, unknown>,
  outName?: string,
): Plugin {
  return {
    name: 'revideo-renderer-plugin',

    async load(id) {
      if (id.startsWith('\x00virtual:renderer')) {
        return `\
            import {render} from '@revideo/renderer/dist/client/render';
            import project from './src/project.ts?project';

            // Read video variables
            project.variables = ${params ? `JSON.parse(\`${JSON.stringify(params)}\`)` : 'project.variables'};

            // Check range of frames to render
            const url = new URL(window.location.href);

            const fileName = url.searchParams.get('fileName');
            const workerId = url.searchParams.get('workerId');
            const totalNumOfWorkers = url.searchParams.get('totalNumOfWorkers');

            // Overwrite project name so that the rendered videos don't overwrite each other
            project.name = fileName;

            render(project, workerId, totalNumOfWorkers);
            `;
      }
    },

    configureServer(server) {
      server.middlewares.use('/render', (_req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(createHtml(`/@id/__x00__virtual:renderer`));
      });
    },
  };
}
