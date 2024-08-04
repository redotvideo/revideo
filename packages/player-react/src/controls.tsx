import {PauseButton, PlayButton} from './icons';
import {getFormattedTime} from './utils';

function PlayPause({
  playing,
  setPlaying,
}: {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}) {
  return (
    <button className="p-p-1" onClick={() => setPlaying(!playing)}>
      {playing ? <PauseButton /> : <PlayButton />}
    </button>
  );
}

function Timeline({
  currentTime,
  duration,
  setCurrentTime,
}: {
  currentTime: number;
  duration: number;
  setCurrentTime: (currentTime: number) => void;
}) {
  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="p-relative p-flex-1 p-w-full p-h-1.5 p-bg-gray-300 p-rounded-full p-overflow-hidden">
      <div
        className="p-absolute p-top-0 p-left-0 p-h-full p-bg-gray-100"
        style={{width: `${progressPercentage}%`}}
      />
      <input
        type="range"
        value={currentTime}
        min={0}
        max={duration}
        step={0.01}
        className="p-absolute p-top-0 p-left-0 p-w-full p-h-full p-opacity-0 p-cursor-pointer"
        onChange={event => setCurrentTime(Number(event.target.value))}
      />
    </div>
  );
}

export function Controls({
  duration,
  playing,
  setPlaying,
  currentTime,
  setForcedTime,
}: {
  duration: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  currentTime: number;
  setForcedTime: (currentTime: number) => void;
}) {
  return (
    <div className="p-text-white p-p-4 p-flex-col p-space-y-2 p-bg-gradient-to-t p-from-gray-500 p-to-transparent">
      <div className="p-flex p-space-x-3 p-items-center">
        <PlayPause playing={playing} setPlaying={setPlaying} />
        <span>{getFormattedTime(currentTime, duration)}</span>
      </div>
      <Timeline
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setForcedTime}
      />
    </div>
  );
}
