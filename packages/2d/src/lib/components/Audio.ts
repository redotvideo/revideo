import { nodeName, computed } from '../decorators';
import { Media, MediaProps } from './Media';
import { DependencyContext, PlaybackState } from '@motion-canvas/core';

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
        audio.src = src;
        Audio.pool[key] = audio;
      }
      if (audio.readyState < 2) {
        DependencyContext.collectPromise(
          new Promise<void>((resolve) => {
            const listener = () => {
              resolve();
              audio.removeEventListener('canplay', listener);
            };
            audio.addEventListener('canplay', listener);
          }),
        );
      }
  
      return audio;
    }

    @computed()
    protected seekedAudio(): HTMLAudioElement {     
      const audio = this.audio();

      audio.addEventListener('ended', () => {
        this.pause();
      });    

      if(!(this.time() < audio.duration)){
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
    
      if(!(this.time() < audio.duration)){
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

    protected override draw(context: CanvasRenderingContext2D) {
      const playbackState = this.view().playbackState();

      playbackState === PlaybackState.Playing ||
      playbackState === PlaybackState.Presenting
        ? this.fastSeekedAudio()
        : this.seekedAudio();
  
        context.save();
        context.restore();

      this.drawChildren(context);
  };    
}