'use client';

import {ComponentProps, useEffect, useState} from 'react';

interface MotionCanvasPlayerProps {
  src: string;
  playing?: boolean;
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

  console.log('Player rendered');

  useEffect(() => {
    import('./revideo-player-ts');
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center bg-white bg-opacity-50 z-10">
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
      </div>
      <div>
        <revideo-player src="/project.js" playing={playing} />
      </div>
    </div>
  );
}
