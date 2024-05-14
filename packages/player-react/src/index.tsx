'use client';
import {ComponentProps, useEffect, useRef, useState} from 'react';
import {Controls} from './controls';
import './styles.css';
import {shouldShowControls} from './utils';

interface RevideoPlayerProps {
  src: string;
  playing?: string;

  // Currently not used.
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
      'revideo-player': RevideoPlayerProps & ComponentProps<'div'>;
    }
  }
}

interface PlayerProps {
  src: string;
  controls?: boolean;

  playing?: boolean;
  currentTime?: number;

  onDurationChange?: (duration: number) => void;
  onTimeUpdate?: (currentTime: number) => void;
}

export function Player({
  src,
  playing = false,
  currentTime = 0,
  onDurationChange = () => {},
  onTimeUpdate = () => {},
  controls = true,
}: PlayerProps) {
  const [playingState, setPlaying] = useState(playing);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [currentTimeState, setCurrentTime] = useState(currentTime);
  const [forcedTime, setForcedTime] = useState(0);
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
    import('./internal');

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
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="relative">
        <revideo-player
          ref={playerRef}
          src={src}
          playing={String(playingState)}
          onClick={() => setPlaying(prev => !prev)}
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
          />
        </div>
      </div>
    </div>
  );
}
