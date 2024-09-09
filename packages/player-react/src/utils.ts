export function getFormattedTime(
  timeInSeconds: number,
  absoluteTimeInSeconds: number,
  timeDisplayFormat: 'MM:SS' | 'MM:SS.mm' | 'MM:SS.m',
) {
  function toFormattedTime(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');
    const milliseconds = Math.floor((timeInSeconds % 1) * 1000)
      .toString()
      .padStart(3, '0');

    if (timeDisplayFormat === 'MM:SS') {
      return `${minutes}:${seconds}`;
    }

    if (timeDisplayFormat === 'MM:SS.m') {
      return `${minutes}:${seconds}.${milliseconds[0]}`;
    }

    if (timeDisplayFormat === 'MM:SS.mm') {
      return `${minutes}:${seconds}.${milliseconds.slice(0, 2)}`;
    }
  }

  return `${toFormattedTime(timeInSeconds)} / ${toFormattedTime(absoluteTimeInSeconds)}`;
}

export function shouldShowControls(
  playing: boolean,
  isMouseOver: boolean,
  areControlsDisabled: boolean,
) {
  if (areControlsDisabled) {
    return false;
  }

  return !playing || isMouseOver;
}
