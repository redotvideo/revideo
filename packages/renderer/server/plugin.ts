import {Plugin} from 'vite';
import * as fs from 'fs';
import * as path from 'path';

const rendererPath = path.resolve(__dirname, '../renderer.html');
console.log("rendererPath", rendererPath);
const content = fs.readFileSync(rendererPath, 'utf-8');
const htmlParts = content.toString().split('{{source}}');
const createHtml = (src: string) => htmlParts[0] + src + htmlParts[1];

export function rendererPlugin(): Plugin {
  return {
    name: 'vite-plugin-motion-canvas-example',

    async load(id) {
        if(id.startsWith('\x00virtual:renderer')){
            return `\
            import {render} from '/@fs/Users/justusmattern/Projects/haven/motioncanvas/motion-canvas/packages/renderer/dist/client/render.js';
            import project from './src/project.ts?project';
            render(project);
            `;
                    }
    },
  
    configureServer(server) {
      server.middlewares.use('/render', (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(createHtml(`/@id/__x00__virtual:renderer`));
      });
    },    // extend Motion Canvas:
  };
}

