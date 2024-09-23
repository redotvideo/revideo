'use client';
import {Player as CorePlayer} from '@revideo/core';
import {ComponentProps, useCallback, useEffect, useRef, useState} from 'react';
import {Controls} from './controls';
import './styles.css';
import {shouldShowControls} from './utils';

interface RevideoPlayerProps {
  src: `${string}/`;
  playing?: string;
  variables?: string;
  looping?: string;
  width?: number;
  height?: number;
  quality?: number;
  fps?: number;
  volume?: number;
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
  src: `${string}/`;

  controls?: boolean;
  variables?: Record<string, any>;
  playing?: boolean;
  currentTime?: number;
  volume?: number;
  looping?: boolean;
  fps?: number;

  width?: number;
  height?: number;
  quality?: number;
  timeDisplayFormat?: 'MM:SS' | 'MM:SS.mm' | 'MM:SS.m';

  onDurationChange?: (duration: number) => void;
  onTimeUpdate?: (currentTime: number) => void;
  onPlayerReady?: (player: CorePlayer) => void;
  onPlayerResize?: (rect: DOMRectReadOnly) => void;
}

export function Player({
  src,

  controls = true,
  variables = {},
  playing = false,
  currentTime = 0,
  volume = 1,
  looping = true,
  fps = 30,

  width = undefined,
  height = undefined,
  quality = undefined,
  timeDisplayFormat = 'MM:SS',

  onDurationChange = () => {},
  onTimeUpdate = () => {},
  onPlayerReady = () => {},
  onPlayerResize = () => {},
}: PlayerProps) {
  const [playingState, setPlaying] = useState(playing);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [currentTimeState, setCurrentTime] = useState(currentTime);
  const [volumeState, setVolumeState] = useState(volume);
  const [duration, setDuration] = useState(-1);

  const focus = useRef(false);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const lastRect = useRef<DOMRectReadOnly | null>(null);

  const onClickHandler = controls ? () => setPlaying(prev => !prev) : undefined;

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
    if (diff > 0.03) {
      setForcedTime(currentTime);
    }
  }, [currentTime]);

  useEffect(() => {
    setForcedVolume(volume);
  }, [volume]);

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

  const handlePlayerReady = (event: Event) => {
    const player = (event as CustomEvent).detail;
    if (player) {
      onPlayerReady(player);
    }
  };

  const handlePlayerResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      const [firstEntry] = entries;
      if (!firstEntry || !wrapperRef.current || !lastRect.current) {
        return;
      }

      const newRect = firstEntry.contentRect;
      if (
        newRect.width !== lastRect.current.width ||
        newRect.height !== lastRect.current.height
      ) {
        lastRect.current = newRect;
        onPlayerResize(newRect);
      }
    },
    [onPlayerResize],
  );

  useEffect(() => {
    if (!wrapperRef.current) return;

    const resizeObserver = new ResizeObserver(handlePlayerResize);
    resizeObserver.observe(wrapperRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [handlePlayerResize]);

  /**
   * Import the player and add all event listeners.
   */
  useEffect(() => {
    import('./internal');

    playerRef.current?.addEventListener('timeupdate', handleTimeUpdate);
    playerRef.current?.addEventListener('duration', handleDurationUpdate);
    playerRef.current?.addEventListener('playerready', handlePlayerReady);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      playerRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      playerRef.current?.removeEventListener('duration', handleDurationUpdate);
      playerRef.current?.removeEventListener('playerready', handlePlayerReady);
      document.removeEventListener('keydown', handleKeyDown);
      const frameElement = document.getElementById('revideo-2d-frame');
      if (frameElement) {
        frameElement.remove();
      }
    };
  }, []);

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

  function setForcedVolume(volume: number) {
    setVolumeState(volume);
    if (playerRef.current) {
      playerRef.current.dispatchEvent(
        new CustomEvent('volumechange', {detail: volume}),
      );
    }
  }

  return (
    <div data-player="true" style={{display: 'contents'}}>
      <div
        ref={wrapperRef}
        className="p-relative p-cursor-default p-focus:outline-none"
        onFocus={() => (focus.current = true)}
        onBlur={() => (focus.current = false)}
        tabIndex={0}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="p-relative">
          <revideo-player
            ref={playerRef}
            src={src}
            playing={String(playingState)}
            onClick={onClickHandler}
            variables={JSON.stringify(variables)}
            looping={looping ? 'true' : 'false'}
            width={width}
            height={height}
            quality={quality}
            fps={fps}
            volume={volumeState}
          />
          <div
            className={`p-absolute p-bottom-0 p-w-full p-transition-opacity p-duration-200 ${
              shouldShowControls(playingState, isMouseOver, !controls)
                ? 'p-opacity-100'
                : 'p-opacity-0'
            }`}
          >
            <Controls
              duration={duration}
              playing={playingState}
              setPlaying={setPlaying}
              currentTime={currentTimeState}
              setForcedTime={setForcedTime}
              timeDisplayFormat={timeDisplayFormat}
              volume={volumeState}
              setVolume={setForcedVolume}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
