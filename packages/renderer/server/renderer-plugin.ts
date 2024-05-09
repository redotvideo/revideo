import {FfmpegSettings, ffmpegSettings} from '@revideo/ffmpeg';
import * as fs from 'fs';
import * as path from 'path';
import {Plugin} from 'vite';

const RendererPath = path.resolve(__dirname, '../renderer.html');
const Content = fs.readFileSync(RendererPath, 'utf-8');
const HtmlParts = Content.toString().split('{{source}}');

function createHtml(src: string) {
  return HtmlParts[0] + src + HtmlParts[1];
}

export function rendererPlugin(
  params?: Record<string, unknown>,
  customFfmpegSettings?: FfmpegSettings,
): Plugin {
  if (customFfmpegSettings?.ffmpegPath) {
    ffmpegSettings.setFfmpegPath(customFfmpegSettings.ffmpegPath);
  }
  if (customFfmpegSettings?.ffmpegLogLevel) {
    ffmpegSettings.setLogLevel(customFfmpegSettings.ffmpegLogLevel);
  }

  return {
    name: 'revideo-renderer-plugin',

    async load(id) {
      if (id.startsWith('\x00virtual:renderer')) {
        return `\
            import {render} from '@revideo/renderer/lib/client/render';
            import project from './src/project.ts?project';

            // Read video variables
            project.variables = ${params ? `JSON.parse(\`${JSON.stringify(params)}\`)` : 'project.variables'};

            // Check range of frames to render
            const url = new URL(window.location.href);

            const fileNameEscaped = url.searchParams.get('fileName');
            const workerId = url.searchParams.get('workerId');
            const totalNumOfWorkers = url.searchParams.get('totalNumOfWorkers');
            const startInSeconds = parseFloat(url.searchParams.get('startInSeconds'));
            const endInSeconds = parseFloat(url.searchParams.get('endInSeconds'));
            const hiddenFolderIdEscaped = url.searchParams.get('hiddenFolderId');
            const videoWidth = parseInt(url.searchParams.get('videoWidth'));
            const videoHeight = parseInt(url.searchParams.get('videoHeight'));

            const fileName = decodeURIComponent(fileNameEscaped);
            const hiddenFolderId = decodeURIComponent(hiddenFolderIdEscaped);

            // Overwrite project name so that the rendered videos don't overwrite each other
            project.name = fileName;

            render(project, workerId, totalNumOfWorkers, startInSeconds, endInSeconds, hiddenFolderId, videoWidth, videoHeight);
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
