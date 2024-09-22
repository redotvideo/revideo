import {renderVideo} from '@revideo/renderer';

async function render() {
  console.log('Rendering video...');

  const file = await renderVideo({
    projectFile: './src/project.ts',
    settings: {
      logProgress: true,
      renderSettings: {
        size: {x: 1080, y: 1920},
        background: '#FFFFFF00',
        exporter: {
          name: '@revideo/core/ffmpeg',
          options: {
            format: 'proRes',
          },
        },
      },
    },
  });

  console.log(`Rendered video to ${file}`);
}

render();
