import {
    DependencyContext,
    PlaybackState,
    SignalValue,
    SimpleSignal,
    clamp,
    isReactive,
    useLogger,
    useThread,
  } from '@motion-canvas/core';
import { initial, nodeName, signal, computed } from '../decorators';
import reactivePlaybackRate from './__logs__/reactive-playback-rate.md';
import { Node, NodeProps } from './Node';
import { RectProps, Rect } from './Rect';
  
  export interface AudioProps extends RectProps {
    src?: SignalValue<string>;
    loop?: SignalValue<boolean>;
    playbackRate?: number;
    time?: SignalValue<number>;
    play?: boolean;
  }
  
  @nodeName('Audio')
  export class Audio extends Rect {
    private static readonly pool: Record<string, HTMLAudioElement> = {};
  
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
  
    private lastTime = -1;
  
    public constructor({ play, ...props }: AudioProps) {
      super(props);
      if (play) {
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
      return this.audio().duration;
    }
  
    @computed()
    public override completion(): number {
      return this.clampTime(this.time()) / this.audio().duration;
    }  

    @computed()
    protected audio(): HTMLAudioElement {
      const src = this.src();
      const key = `${this.key}/${src}`;
      let audio = Audio.pool[key];
      if (!audio) {
        audio = document.createElement('audio');
        document.body.appendChild(audio);

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

    protected override draw(context: CanvasRenderingContext2D) {
        this.drawShape(context);
        const playbackState = this.view().playbackState();
        const audio =
            playbackState === PlaybackState.Playing ||
            playbackState === PlaybackState.Presenting
              ? this.fastSeekedAudio()
              : this.seekedAudio();
    
          context.save();
          context.clip(this.getPath());
          context.restore();

        if (this.clip()) {
        context.clip(this.getPath());
        }     

        this.drawChildren(context);
    };  

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
  
  
    protected setCurrentTime(value: number) {
      const audio = this.audio();  
      if (audio.readyState < 2){
        return;

      } 
  
      audio.currentTime = value;
      this.lastTime = value;
      if (audio.seeking) {
        DependencyContext.collectPromise(
            new Promise<void>(resolve => {
              const listener = () => {
               resolve();
                audio.removeEventListener('seeked', listener);
              };
              audio.addEventListener('seeked', listener);
            }),
          );
    }
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
      this.audio().pause();
    }
  
    public seek(time: number) {
      const playing = this.playing();
      this.time(this.clampTime(time));
      if (playing) {
        this.play();
      } else {
        this.pause();
      }
    }
  
    public clampTime(time: number): number {
      const duration = this.audio().duration;
      if (this.loop()) {
        time %= duration-0.1;
      }
      return clamp(0, duration, time);
    }

    protected override collectAsyncResources() {
        super.collectAsyncResources();
        this.seekedAudio();
      }
  }