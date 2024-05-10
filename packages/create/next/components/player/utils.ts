export function getFormattedTime(
  timeInSeconds: number,
  absoluteTimeInSeconds: number,
) {
  function toFormattedTime(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return `${toFormattedTime(timeInSeconds)} / ${toFormattedTime(
    absoluteTimeInSeconds,
  )}`;
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
