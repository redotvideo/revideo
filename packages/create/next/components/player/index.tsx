'use client';

import {ComponentProps, useEffect, useRef, useState} from 'react';
import {PauseButton, PlayButton} from './icons';

interface MotionCanvasPlayerProps {
  src: string;
  playing?: string;

  width?: number;
  height?: number;
  auto?: boolean;
  quality?: number;
  variables?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line
      'revideo-player': MotionCanvasPlayerProps & ComponentProps<'div'>;
    }
  }
}

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

function Bar({
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

function getFormattedTime(
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

function Controls({
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
    <div className="p-4 flex-col space-y-2">
      <div className="flex space-x-3 items-center">
        <PlayPause playing={playing} setPlaying={setPlaying} />
        <span>{getFormattedTime(currentTime, duration)}</span>
      </div>
      <Bar
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setForcedTime}
      />
    </div>
  );
}

export function Player() {
  const [playing, setPlaying] = useState(false);
  const focus = useRef(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [forcedTime, setForcedTime] = useState(0);
  const [duration, setDuration] = useState(-1);

  const playerRef = useRef<HTMLDivElement>(null);

  const handleTimeUpdate = (event: Event) => {
    const e = event as CustomEvent;
    setCurrentTime(e.detail);
  };

  const handleDurationUpdate = (event: Event) => {
    const e = event as CustomEvent;
    setDuration(e.detail);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space' && focus.current) {
      event.preventDefault();
      setPlaying(prevPlaying => !prevPlaying);
    }
  };

  /**
   * Import the player and add all event listeners.
   */
  useEffect(() => {
    import('./revideo-player-ts');

    playerRef.current?.addEventListener('timeupdate', handleTimeUpdate);
    playerRef.current?.addEventListener('duration', handleDurationUpdate);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      playerRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      playerRef.current?.removeEventListener('duration', handleDurationUpdate);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /**
   * When the forced time changes, seek to that time.
   */
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.dispatchEvent(
        new CustomEvent('seekto', {detail: forcedTime}),
      );
    }
  }, [forcedTime]);

  return (
    <div
      className="relative cursor-default focus:outline-none"
      onFocus={() => (focus.current = true)}
      onBlur={() => (focus.current = false)}
      tabIndex={0}
    >
      <div className="relative">
        <revideo-player
          ref={playerRef}
          src="/project.js"
          playing={String(playing)}
          onClick={() => setPlaying(prev => !prev)}
        />
        <div className="absolute bottom-0 w-full transition-opacity duration-200">
          <Controls
            duration={duration}
            playing={playing}
            setPlaying={setPlaying}
            currentTime={currentTime}
            setForcedTime={setForcedTime}
          />
        </div>
      </div>
    </div>
  );
}
