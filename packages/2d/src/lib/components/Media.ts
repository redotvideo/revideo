import {
  DependencyContext,
  SignalValue,
  SimpleSignal,
  clamp,
  isReactive,
  useLogger,
  useThread,
} from '@revideo/core';
import {computed, initial, nodeName, signal} from '../decorators';
import {Asset} from './Asset';
import {RectProps} from './Rect';
import reactivePlaybackRate from './__logs__/reactive-playback-rate.md';

export interface MediaProps extends RectProps {
  src?: SignalValue<string>;
  loop?: SignalValue<boolean>;
  playbackRate?: number;
  volume?: number;
  time?: SignalValue<number>;
  play?: boolean;
}

@nodeName('Media')
export abstract class Media extends Asset {
  @initial(false)
  @signal()
  public declare readonly loop: SimpleSignal<boolean, this>;

  @initial(1)
  @signal()
  public declare readonly playbackRate: SimpleSignal<number, this>;

  @initial(0)
  @signal()
  protected declare readonly time: SimpleSignal<number, this>;

  @initial(false)
  @signal()
  protected declare readonly playing: SimpleSignal<boolean, this>;

  @initial(1)
  @signal()
  protected declare readonly volume: SimpleSignal<number, this>;

  protected lastTime = -1;

  public constructor(props: MediaProps) {
    super(props);
    if (props.play) {
      this.play();
    }
  }

  public isPlaying(): boolean {
    return this.playing();
  }

  public getCurrentTime(): number {
    return this.clampTime(this.time());
  }

  public getDuration(): number {
    return this.mediaElement().duration;
  }

  public getVolume(): number {
    return this.mediaElement().volume;
  }

  public override dispose() {
    this.pause();
    this.remove();
    super.dispose();
  }

  @computed()
  public override completion(): number {
    return this.clampTime(this.time()) / this.getDuration();
  }

  protected abstract mediaElement(): HTMLMediaElement;

  protected abstract seekedMedia(): HTMLMediaElement;

  protected abstract fastSeekedMedia(): HTMLMediaElement;

  protected abstract override draw(
    context: CanvasRenderingContext2D,
  ): Promise<void>;

  protected setCurrentTime(value: number) {
    const media = this.mediaElement();
    if (media.readyState < 2) return;

    media.currentTime = value;
    this.lastTime = value;
    if (media.seeking) {
      DependencyContext.collectPromise(
        new Promise<void>(resolve => {
          const listener = () => {
            resolve();
            media.removeEventListener('seeked', listener);
          };
          media.addEventListener('seeked', listener);
        }),
      );
    }
  }

  public setVolume(volume: number) {
    if (volume < 0 || volume > 1) {
      console.warn(
        `${volume} is an incorrect value for volume, has to be in range [0,1]. We're clamping to the nearest value`,
      );
    }
    this.mediaElement().volume = Math.min(Math.max(volume, 0), 1);
  }

  protected setPlaybackRate(playbackRate: number) {
    let value: number;
    if (isReactive(playbackRate)) {
      value = playbackRate();
      useLogger().warn({
        message: 'Invalid value set as the playback rate',
        remarks: reactivePlaybackRate,
        inspect: this.key,
        stack: new Error().stack,
      });
    } else {
      value = playbackRate;
    }
    this.playbackRate.context.setter(value);

    if (this.playing()) {
      if (value === 0) {
        this.pause();
      } else {
        const time = useThread().time;
        const start = time();
        const offset = this.time();
        this.time(() => this.clampTime(offset + (time() - start) * value));
      }
    }
  }

  public play() {
    const time = useThread().time;
    const start = time();
    const offset = this.time();
    const playbackRate = this.playbackRate();
    this.playing(true);
    this.time(() => this.clampTime(offset + (time() - start) * playbackRate));
  }

  public pause() {
    this.playing(false);
    this.time.save();
    this.mediaElement().pause();
  }

  public clampTime(time: number): number {
    const duration = this.getDuration();
    if (this.loop()) {
      time %= duration;
    }
    return clamp(0, duration, time);
  }

  protected override collectAsyncResources() {
    super.collectAsyncResources();
    this.seekedMedia();
  }

  protected getErrorReason(errCode?: number) {
    let reason;
    switch (errCode) {
      case 1:
        reason = 'MEDIA_ERR_ABORTED';
        break;
      case 2:
        reason = 'MEDIA_ERR_NETWORK. This might be a 404 error.';
        break;
      case 3:
        reason =
          'MEDIA_ERR_DECODE. This might be an issue with your video file.';
        break;
      case 4:
        reason =
          'MEDIA_ERR_SRC_NOT_SUPPORTED. If you are sure that the path to the video is correct, this might be a CORS error.';
        break;
      default:
        reason = 'UNKNOWN';
    }

    return reason;
  }
}
