const progressTracker = new Map<number, number>();

export function trackProgress(id: number, progress: number) {
  progressTracker.set(id, progress);
}

export function printProgress() {
  let line = '';
  for (const [key, value] of progressTracker.entries()) {
    line += `Progress on worker ${key}: ${(value * 100).toFixed(0)}% `;
  }

  if (line === '') {
    return;
  }

  console.log(line);
}
