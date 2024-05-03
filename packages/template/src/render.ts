import {renderVideo} from '@revideo/renderer';

const progressTracker = new Map<number, number>();

function trackProgress(id: number, progress: number) {
  progressTracker.set(id, progress);
}

function printProgress() {
  let line = '';
  for (const [key, value] of progressTracker.entries()) {
    line += `${key}: ${(value * 100).toFixed(0)}% `;
  }

  if (line === '') {
    return;
  }

  console.log(line);
}

async function render() {
  console.log('Rendering video...');

  const interval = setInterval(() => {
    printProgress();
  }, 1000);

  // This is the main function that renders the video
  const file = await renderVideo(
    './vite.config.ts',
    {fill: 'orange'},
    trackProgress,
  );

  clearInterval(interval);

  console.log(`Rendered video to ${file}`);
}

render();
