'use client';

import {ComponentProps, useEffect, useRef, useState} from 'react';

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

export function Player() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playerRef = useRef<HTMLDivElement>(null);

  const handleTimeUpdate = (event: Event) => {
    const e = event as CustomEvent;
    setCurrentTime(e.detail);
  };

  useEffect(() => {
    import('./revideo-player-ts');

    playerRef.current?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      playerRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center bg-white bg-opacity-10 z-10">
        <button
          onClick={() => {
            setPlaying(true);
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            setPlaying(false);
          }}
        >
          Pause
        </button>
        <span className="current-time">{currentTime}</span>
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
