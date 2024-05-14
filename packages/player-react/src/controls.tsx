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
    <button className="p-1 z-20" onClick={() => setPlaying(!playing)}>
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
    <div className="relative flex-1 w-full h-1.5 bg-gray-400 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-gray-100"
        style={{width: `${progressPercentage}%`}}
      />
      <input
        type="range"
        value={currentTime}
        min={0}
        max={duration}
        step={0.01}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
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
    <div className="text-white p-4 flex-col space-y-2 bg-gradient-to-t from-black to-transparent">
      <div className="flex space-x-3 items-center">
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
