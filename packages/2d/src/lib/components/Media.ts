import type {SignalValue, SimpleSignal} from '@revideo/core';
import {
  DependencyContext,
  PlaybackState,
  clamp,
  isReactive,
  useLogger,
  useThread,
} from '@revideo/core';
import {computed, initial, nodeName, signal} from '../decorators';
import type {RectProps} from './Rect';
import {Rect} from './Rect';

export interface MediaProps extends RectProps {
  src?: SignalValue<string>;
  loop?: SignalValue<boolean>;
  playbackRate?: number;
  volume?: number;
  time?: SignalValue<number>;
  play?: boolean;
  awaitCanPlay?: SignalValue<boolean>;
  allowVolumeAmplificationInPreview?: SignalValue<boolean>;
}

const reactivePlaybackRate = `
The \`playbackRate\` of a \`Video\` cannot be reactive.

Make sure to use a concrete value and not a function:

\`\`\`ts wrong
video.playbackRate(() => 7);
\`\`\`

\`\`\`ts correct
video.playbackRate(7);
\`\`\`

If you're using a signal, extract its value before passing it to the property:

\`\`\`ts wrong
video.playbackRate(mySignal);
\`\`\`

\`\`\`ts correct
video.playbackRate(mySignal());
\`\`\`
`;

@nodeName('Media')
export abstract class Media extends Rect {
  @signal()
  public declare readonly src: SimpleSignal<string, this>;

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

  @initial(true)
  @signal()
  protected declare readonly awaitCanPlay: SimpleSignal<boolean, this>;

  @initial(false)
  @signal()
  protected declare readonly allowVolumeAmplificationInPreview: SimpleSignal<
    boolean,
    this
  >;

  protected declare volume: number;

  protected static readonly amplificationPool: Record<
    string,
    {
      audioContext: AudioContext;
      sourceNode: MediaElementAudioSourceNode;
      gainNode: GainNode;
    }
  > = {};
  protected lastTime = -1;

  public constructor(props: MediaProps) {
    super(props);
    if (!this.awaitCanPlay()) {
      this.scheduleSeek(this.time());
    }

    if (props.play) {
      this.play();
    }
    this.volume = props.volume ?? 1;
    this.setVolume(this.volume);
  }

  public isPlaying(): boolean {
    return this.playing();
  }

  public getCurrentTime(): number {
    return this.clampTime(this.time());
  }

  public getDuration(): number {
    const mElement = this.mediaElement();
    const isVideo = (mElement instanceof HTMLVideoElement);
    const isAudio = (mElement instanceof HTMLVideoElement);
    return (this.isIOS() || (isVideo || isAudio)) ? 2 :  this.mediaElement().duration;    
    //return 10;
    // return this.mediaElement().duration;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getUrl(): string {
    return this.mediaElement().src;
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
    if (volume < 0) {
      console.warn(
        `volumes cannot be negative - the value will be clamped to 0.`,
      );
    }
    const media = this.mediaElement();
    media.volume = Math.min(Math.max(volume, 0), 1);

    if (volume > 1) {
      if (this.allowVolumeAmplificationInPreview()) {
        this.amplify(media, volume);
        return;
      }
      console.warn(
        `you have set the volume of node ${this.key} to ${volume} - your video will be exported with the correct volume, but the browser does not support volumes higher than 1 by default. To enable volume amplification in the preview, set the "allowVolumeAmplificationInPreview" of your <Video/> or <Audio/> tag to true. Note that amplification for previews will not work if you use autoplay within the player due to browser autoplay policies: https://developer.chrome.com/blog/autoplay/#webaudio.`,
      );
    }
  }

  @computed()
  protected amplify(node: HTMLMediaElement, volume: number) {
    const key = `${this.src()}/${this.key}`;

    if (Media.amplificationPool[key]) {
      Media.amplificationPool[key].gainNode.gain.value = volume;
      return;
    }

    const audioContext = new AudioContext();
    const sourceNode = audioContext.createMediaElementSource(node);
    const gainNode = audioContext.createGain();

    gainNode.gain.value = volume;
    sourceNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    Media.amplificationPool[key] = {audioContext, sourceNode, gainNode};

    if (typeof window === 'undefined' || audioContext.state !== 'suspended') {
      return;
    }

    // Start audio context after user interation, neccessary due to browser autoplay policies
    const handleInteraction = () => {
      Media.amplificationPool[key].audioContext.resume();
      window.removeEventListener('click', handleInteraction);
    };
    window.addEventListener('click', handleInteraction);
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

  protected scheduleSeek(time: number) {
    this.waitForCanPlay(this.mediaElement(), () => {
      const media = this.mediaElement();
      // Wait until the media is ready to seek again as
      // setting the time before the video doesn't work reliably.
      media.currentTime = time;
    });
  }

  /**
   * Waits for the canplay event to be fired before calling onCanPlay.
   *
   * If the media is already ready to play, onCanPlay is called immediately.
   * @param onCanPlay - The function to call when the media is ready to play.
   * @returns
   */
  protected waitForCanPlay(media: HTMLMediaElement, onCanPlay: () => void) {
    if (media.readyState >= 2) {
      onCanPlay();
      return;
    }

    const onCanPlayWrapper = () => {
      onCanPlay();
      media.removeEventListener('canplay', onCanPlayWrapper);
    };

    const onError = () => {
      const reason = this.getErrorReason(media.error?.code);
      console.log(`ERROR: Error loading video: ${this.src()}, ${reason}`);
      media.removeEventListener('error', onError);
    };

    media.addEventListener('canplay', onCanPlayWrapper);
    media.addEventListener('error', onError);
  }

  /**
   * Returns true if we should wait for the media to be ready to play.
   */
  protected waitForCanPlayNecessary(media: HTMLMediaElement): boolean {
    if (media.readyState >= 2) {
      return false;
    }

    return (
      this.awaitCanPlay() ||
      this.view().playbackState() === PlaybackState.Rendering
    );
  }

  public play() {
    // return;
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

  // Helper method to check if running on iOS
  protected isIOS(): boolean {
    if (typeof navigator === 'undefined') return false;
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    return isIos;
  }
}
