import * as fs from 'fs';
import * as path from 'path';
import {Plugin} from 'vite';

const RendererPath = path.resolve(__dirname, '../renderer.html');
const Content = fs.readFileSync(RendererPath, 'utf-8');
const HtmlParts = Content.toString().split('{{source}}');

function createHtml(src: string) {
  return HtmlParts[0] + src + HtmlParts[1];
}

export function rendererPlugin(): Plugin {
  return {
    name: 'motion-canvas-renderer-plugin',

    async load(id) {
      if (id.startsWith('\x00virtual:renderer')) {
        return `\
            import {render} from '@motion-canvas/renderer/client/render';
            import project from './src/project.ts?project';
            render(project);
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
