import {RenderVideoUserProjectSettings} from '@revideo/core';
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

function escapeSpecialChars(_: string, value: string) {
  if (typeof value === 'string') {
    /* eslint-disable no-useless-escape */
    return value
      .replace(/[\\]/g, '\\\\')
      .replace(/[\"]/g, '\\"')
      .replace(/[\/]/g, '\\/')
      .replace(/[\b]/g, '\\b')
      .replace(/[\f]/g, '\\f')
      .replace(/[\n]/g, '\\n')
      .replace(/[\r]/g, '\\r')
      .replace(/[\t]/g, '\\t');
    /* eslint-enable no-useless-escape */
  }

  return value;
}

export function rendererPlugin(
  projectSettings?: RenderVideoUserProjectSettings,
  variables?: Record<string, unknown>,
  customFfmpegSettings?: FfmpegSettings,
  projectFile?: string,
): Plugin {
  if (customFfmpegSettings?.ffmpegPath) {
    ffmpegSettings.setFfmpegPath(customFfmpegSettings.ffmpegPath);
  }
  if (customFfmpegSettings?.ffprobePath) {
    ffmpegSettings.setFfprobePath(customFfmpegSettings.ffprobePath);
  }
  if (customFfmpegSettings?.ffmpegLogLevel) {
    ffmpegSettings.setLogLevel(customFfmpegSettings.ffmpegLogLevel);
  }

  const projectSettingsString = projectSettings
    ? JSON.stringify(projectSettings)
    : JSON.stringify({});

  return {
    name: 'revideo-renderer-plugin',

    async load(id) {
      if (id.startsWith('\x00virtual:renderer')) {
        return `\
            import {render} from '@revideo/renderer/lib/client/render';
            import {Vector2} from '@revideo/core';
            import project from '${projectFile}';

            // Read video variables
            project.variables = ${variables ? `JSON.parse(\`${JSON.stringify(variables, escapeSpecialChars)}\`)` : 'project.variables'};

            // Check range of frames to render
            const url = new URL(window.location.href);

            const fileNameEscaped = url.searchParams.get('fileName');
            const workerId = parseInt(url.searchParams.get('workerId'));
            const totalNumOfWorkers = parseInt(url.searchParams.get('totalNumOfWorkers'));
            const hiddenFolderIdEscaped = url.searchParams.get('hiddenFolderId');

            const fileName = decodeURIComponent(fileNameEscaped);
            const hiddenFolderId = decodeURIComponent(hiddenFolderIdEscaped);

            // Overwrite project name so that the rendered videos don't overwrite each other
            project.name = fileName;

            render(project, workerId, totalNumOfWorkers, hiddenFolderId, JSON.parse(\`${projectSettingsString}\`));
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
