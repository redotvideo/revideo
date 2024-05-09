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
    <button onClick={() => setPlaying(!playing)}>
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
  return (
    <input
      type="range"
      value={currentTime}
      min={0}
      max={duration}
      step={0.01}
      onChange={event => setCurrentTime(Number(event.target.value))}
    />
  );
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
    <div className="p-1 flex space-x-3 items-center">
      <PlayPause playing={playing} setPlaying={setPlaying} />
      <Bar
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setForcedTime}
      />
      <span>{currentTime.toFixed(2)}</span>
    </div>
  );
}

export function Player() {
  const [playing, setPlaying] = useState(false);

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
    console.log('duration update', e.detail);

    setDuration(e.detail);
  };

  /**
   * Import the player and add all event listeners.
   */
  useEffect(() => {
    import('./revideo-player-ts');

    playerRef.current?.addEventListener('timeupdate', handleTimeUpdate);
    playerRef.current?.addEventListener('duration', handleDurationUpdate);

    return () => {
      playerRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      playerRef.current?.removeEventListener('duration', handleDurationUpdate);
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
    <div className="relative">
      <div className="absolute inset-0 flex items-center bg-white bg-opacity-10 z-10">
        <div className="absolute bottom-0">
          <Controls
            duration={duration}
            playing={playing}
            setPlaying={setPlaying}
            currentTime={currentTime}
            setForcedTime={setForcedTime}
          />
        </div>
      </div>
      <div>
        <revideo-player
          ref={playerRef}
          src="/project.js"
          playing={String(playing)}
        />
      </div>
    </div>
  );
}
