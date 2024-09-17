import {useState} from 'react';
import {MutedSoundIcon, PauseButton, PlayButton, SoundIcon} from './icons';
import {getFormattedTime} from './utils';

function PlayPause({
  playing,
  setPlaying,
}: {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}) {
  return (
    <button
      type="button"
      className="p-p-1"
      onClick={() => setPlaying(!playing)}
    >
      {playing ? <PauseButton /> : <PlayButton />}
    </button>
  );
}

function VolumeSlider({
  volume,
  setVolume,
}: {
  volume: number;
  setVolume: (volume: number) => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);

  const handleIconClick = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume);
    }
  };

  return (
    <div
      className="p-flex p-items-center p-space-x-2 p-relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        if (!isInteracting) {
          setIsHovering(false);
        }
      }}
    >
      <div
        className="p-w-6 p-h-6 p-flex p-items-center p-justify-center p-cursor-pointer"
        onClick={handleIconClick}
      >
        {volume === 0 ? <MutedSoundIcon /> : <SoundIcon />}
      </div>
      {(isHovering || isInteracting) && (
        <div className="p-flex p-items-center p-h-1.5 p-whitespace-nowrap">
          <div className="p-relative p-w-20 p-h-1.5 p-bg-gray-300 p-rounded-full">
            <div
              className="p-absolute p-top-0 p-left-0 p-h-full p-bg-gray-100 p-rounded-full"
              style={{width: `${volume * 100}%`}}
            />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={e => {
                const newVolume = Number(e.target.value);
                setVolume(newVolume);
                if (newVolume > 0) {
                  setPreviousVolume(newVolume);
                }
              }}
              onMouseDown={() => setIsInteracting(true)}
              onMouseUp={() => setIsInteracting(false)}
              onMouseLeave={() => setIsInteracting(false)}
              className="p-absolute p-top-0 p-left-0 p-w-full p-h-full p-opacity-0 p-cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
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
  timeDisplayFormat,
  volume,
  setVolume,
}: {
  duration: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  currentTime: number;
  setForcedTime: (currentTime: number) => void;
  timeDisplayFormat: 'MM:SS' | 'MM:SS.m' | 'MM:SS.mm';
  volume: number;
  setVolume: (volume: number) => void;
}) {
  return (
    <div className="p-text-white p-p-4 p-flex-col p-space-y-2 p-bg-gradient-to-t p-from-gray-500 p-to-transparent">
      <div className="p-flex p-items-center p-space-x-2">
        <PlayPause playing={playing} setPlaying={setPlaying} />
        <div className="p-flex p-items-center p-space-x-2">
          <VolumeSlider volume={volume} setVolume={setVolume} />
          <div>
            <span>
              {getFormattedTime(currentTime, duration, timeDisplayFormat)}
            </span>
          </div>
        </div>
        <div className="p-flex-grow" />
      </div>
      <Timeline
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setForcedTime}
      />
    </div>
  );
}
