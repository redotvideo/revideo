import {DependencyContext, PlaybackState} from '@revideo/core';
import {computed, nodeName} from '../decorators';
import type {MediaProps} from './Media';
import {Media} from './Media';

@nodeName('Audio')
export class Audio extends Media {
  private static readonly pool: Record<string, HTMLAudioElement> = {};

  public constructor(props: MediaProps) {
    super(props);
  }

  protected mediaElement(): HTMLAudioElement {
    return this.audio();
  }

  protected seekedMedia(): HTMLAudioElement {
    return this.seekedAudio();
  }

  protected fastSeekedMedia(): HTMLAudioElement {
    return this.fastSeekedAudio();
  }

  @computed()
  protected audio(): HTMLAudioElement {
    const src = this.src();
    const key = `${this.key}/${src}`;
    let audio = Audio.pool[key];
    if (!audio) {
      audio = document.createElement('audio');
      audio.crossOrigin = 'anonymous';
      audio.src = src;
      // Add iOS compatibility attributes
      if (this.isIOS()) {
        audio.muted = true; // Initially mute for autoplay on iOS

      // CRITICAL: Add these for iOS duration fix
      audio.preload = 'metadata';
      
      audio.setAttribute('preload', 'metadata');
      audio.addEventListener('play', () => {
        audio.muted = false;
      });
      }
     
      Audio.pool[key] = audio;
    }
    

    const weNeedToWait = this.waitForCanPlayNecessary(audio);
    if (!weNeedToWait) {
      return audio;
    }

    if (!this.isIOS()) {
      DependencyContext.collectPromise(
        new Promise<void>(resolve => {
          this.waitForCanPlay(audio, resolve);
        }),
      );
   }

    // DependencyContext.collectPromise(
    //   new Promise<void>(resolve => {
    //     this.waitForCanPlay(audio, resolve);
    //   }),
    // );

    return audio;
  }

  @computed()
  protected seekedAudio(): HTMLAudioElement {
    const audio = this.audio();

    audio.addEventListener('ended', () => {
      this.pause();
    });

    if (!(this.time() < audio.duration)) {
      this.pause();
      return audio;
    }

    const time = this.clampTime(this.time());
    audio.playbackRate = this.playbackRate();

    if (!audio.paused) {
      audio.pause();
    }

    if (this.lastTime === time) {
      return audio;
    }

    this.setCurrentTime(time);

    return audio;
  }

  @computed()
  protected fastSeekedAudio(): HTMLAudioElement {
    const audio = this.audio();

    if (!(this.time() < audio.duration)) {
      this.pause();
      return audio;
    }

    const time = this.clampTime(this.time());

    audio.playbackRate = this.playbackRate();

    if (this.lastTime === time) {
      return audio;
    }

    const playing =
      this.playing() && time < audio.duration && audio.playbackRate > 0;
    if (playing) {
      if (audio.paused) {
        DependencyContext.collectPromise(audio.play());
      }
    } else {
      if (!audio.paused) {
        audio.pause();
      }
    }
    if (Math.abs(audio.currentTime - time) > 0.3) {
      this.setCurrentTime(time);
    } else if (!playing) {
      audio.currentTime = time;
    }

    return audio;
  }

  protected override async draw(context: CanvasRenderingContext2D) {
    const playbackState = this.view().playbackState();

    playbackState === PlaybackState.Playing ||
    playbackState === PlaybackState.Presenting
      ? this.fastSeekedAudio()
      : this.seekedAudio();

    context.save();
    context.restore();

    await this.drawChildren(context);
  }
}
