import {renderVideo} from '@revideo/renderer';

async function render() {
  console.log('Rendering video...');

  const file = await renderVideo(
    './src/project.ts',
    {fill: 'orange'},
    () => {},
    {logProgress: true, outDir: 'out', name: 'result'},
  );

  console.log(`Rendered video to ${file}`);
}

render();
