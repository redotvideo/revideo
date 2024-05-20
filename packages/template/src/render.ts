import {renderVideo} from '@revideo/renderer';

async function render() {
  console.log('Rendering video...');

  const file = await renderVideo(
    './vite.config.ts',
    {fill: 'orange'},
    () => {},
    {logProgress: true},
  );

  console.log(`Rendered video to ${file}`);
}

render();
