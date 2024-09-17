'use client';
import {FullProject} from '@revideo/core';
import {ComponentProps, useEffect, useRef, useState} from 'react';
import {Controls} from './controls';
import './index.css';
import {shouldShowControls} from './utils';

interface RevideoPlayerProps {
  playing?: string;
  variables?: string;
  looping?: string;
  width?: number;
  height?: number;
  quality?: number;
  fps?: number;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line
      'revideo-player': RevideoPlayerProps & ComponentProps<'div'>;
    }
  }
}

interface PlayerProps {
  project: FullProject;
  controls?: boolean;
  variables?: Record<string, any>;
  playing?: boolean;
  currentTime?: number;
  looping?: boolean;
  fps?: number;

  width?: number;
  height?: number;
  quality?: number;
  timeDisplayFormat?: 'MM:SS' | 'MM:SS.mm' | 'MM:SS.m';

  onDurationChange?: (duration: number) => void;
  onTimeUpdate?: (currentTime: number) => void;
}

export function Player({
  project,
  controls = true,
  variables = {},
  playing = false,
  currentTime = 0,
  looping = true,
  fps = 30,

  width = undefined,
  height = undefined,
  quality = undefined,
  timeDisplayFormat = 'MM:SS',

  onDurationChange = () => {},
  onTimeUpdate = () => {},
}: PlayerProps) {
  const [playingState, setPlaying] = useState(playing);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [currentTimeState, setCurrentTime] = useState(currentTime);
  const [duration, setDuration] = useState(-1);

  const focus = useRef(false);
  const playerRef = useRef<HTMLDivElement>(null);

  /**
   * Sync the playing prop with the player's own state when it changes.
   */
  useEffect(() => {
    setPlaying(playing);
  }, [playing]);

  /**
   * Sync the current time with the player's own state.
   */
  useEffect(() => {
    const diff = Math.abs(currentTime - currentTimeState);
    if (diff > 0.05) {
      setForcedTime(currentTime);
    }
  }, [currentTime]);

  /**
   * Receives the current time of the video from the player.
   */
  const handleTimeUpdate = (event: Event) => {
    const e = event as CustomEvent;
    setCurrentTime(e.detail);
    onTimeUpdate(e.detail);
  };

  /**
   * Receives the duration of the video from the player.
   */
  const handleDurationUpdate = (event: Event) => {
    const e = event as CustomEvent;
    setDuration(e.detail);
    onDurationChange(e.detail);
  };

  /**
   * Play and pause using the space key.
   */
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space' && focus.current) {
      event.preventDefault();
      setPlaying(prev => !prev);
    }
  };

  /**
   * Import the player and add all event listeners.
   */
  useEffect(() => {
    import('./internal').then(() => {
      if (playerRef.current) {
        (playerRef.current as any).setProject(project);
      }
    });

    playerRef.current?.addEventListener('timeupdate', handleTimeUpdate);
    playerRef.current?.addEventListener('duration', handleDurationUpdate);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      playerRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      playerRef.current?.removeEventListener('duration', handleDurationUpdate);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  /**
   * When the forced time changes, seek to that time.
   */
  function setForcedTime(forcedTime: number) {
    if (playerRef.current) {
      playerRef.current.dispatchEvent(
        new CustomEvent('seekto', {detail: forcedTime}),
      );
    }
  }

  return (
    <div className="revideo-player-root" style={{display: 'contents'}}>
      <div
        className="relative cursor-default focus:outline-none"
        onFocus={() => (focus.current = true)}
        onBlur={() => (focus.current = false)}
        tabIndex={0}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="relative">
          <revideo-player
            ref={playerRef}
            playing={String(playingState)}
            onClick={() => setPlaying(prev => !prev)}
            variables={JSON.stringify(variables)}
            looping={looping ? 'true' : 'false'}
            width={width}
            height={height}
            quality={quality}
            fps={fps}
          />
          <div
            className={`absolute bottom-0 w-full transition-opacity duration-200 ${
              shouldShowControls(playingState, isMouseOver, !controls)
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <Controls
              duration={duration}
              playing={playingState}
              setPlaying={setPlaying}
              currentTime={currentTimeState}
              setForcedTime={setForcedTime}
              timeDisplayFormat={timeDisplayFormat}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
