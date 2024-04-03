import type {PlayerSettings, Project, StageSettings} from '@revideo/core';
import {Player, Stage} from '@revideo/core';

import {Vector2} from '@revideo/core';
import styles from './styles.scss?inline';
import html from './template.html?raw';

const TEMPLATE = `<style>${styles}</style>${html}`;
const ID = 'revideo-player';

enum State {
  Initial = 'initial',
  Loading = 'loading',
  Ready = 'ready',
  Error = 'error',
}

class MotionCanvasPlayer extends HTMLElement {
  public static get observedAttributes() {
    return ['src', 'quality', 'width', 'height', 'auto', 'variables'];
  }

  private get auto() {
    const attr = this.getAttribute('auto');
    return !!attr;
  }

  private get hover() {
    return this.getAttribute('auto') === 'hover';
  }

  private get quality() {
    const attr = this.getAttribute('quality');
    return attr ? parseFloat(attr) : this.defaultSettings.resolutionScale;
  }

  private get width() {
    const attr = this.getAttribute('width');
    return attr ? parseFloat(attr) : this.defaultSettings.size.width;
  }

  private get height() {
    const attr = this.getAttribute('height');
    return attr ? parseFloat(attr) : this.defaultSettings.size.height;
  }

  private get variables() {
    try {
      const attr = this.getAttribute('variables');
      return attr ? JSON.parse(attr) : {};
    } catch {
      this.project.logger.warn(`Project variables could not be parsed.`);
      return {};
    }
  }

  private readonly root: ShadowRoot;
  private readonly canvas: HTMLCanvasElement;
  private readonly overlay: HTMLCanvasElement;
  private readonly button: HTMLDivElement;

  private state = State.Initial;
  private project: Project | null = null;
  private player: Player | null = null;
  private defaultSettings: PlayerSettings & StageSettings;
  private abortController: AbortController | null = null;
  private mouseMoveId: number | null = null;
  private finished = false;
  private playing = false;
  private connected = false;
  private stage = new Stage();
  private timeline: HTMLInputElement;

  public constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
    this.root.innerHTML = TEMPLATE;

    this.overlay = this.root.querySelector('.overlay');
    this.button = this.root.querySelector('.button');
    this.canvas = this.stage.finalBuffer;
    this.canvas.classList.add('canvas');
    this.root.prepend(this.canvas);

    this.timeline = this.root.querySelector('.timeline');
    this.timeline.addEventListener('input', this.handleTimelineChange);
    this.timeline.addEventListener('change', this.handleTimelineChange);

    this.button.addEventListener('click', this.handleClick);
    this.button.addEventListener('mousedown', this.handleMouseDown);
    this.overlay.addEventListener('click', this.handleClick);
    this.overlay.addEventListener('mousemove', this.handleMouseMove);
    this.overlay.addEventListener('mouseleave', this.handleMouseLeave);
    this.overlay.addEventListener('mousedown', this.handleMouseDown);

    this.setState(State.Initial);
  }

  private handleTimelineChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    const durationInFrames = this.player?.playback.duration;
    if (durationInFrames) {
      this.player?.requestSeek(value);
    }
  };

  private handleMouseMove = () => {
    if (this.mouseMoveId) {
      clearTimeout(this.mouseMoveId);
    }
    if (this.hover && !this.playing) {
      this.setPlaying(true);
    }

    this.mouseMoveId = window.setTimeout(() => {
      this.mouseMoveId = null;
      this.updateClass();
    }, 2000);
    this.updateClass();
  };

  private handleMouseLeave = () => {
    if (this.hover) {
      this.setPlaying(false);
    }
    if (this.mouseMoveId) {
      clearTimeout(this.mouseMoveId);
      this.mouseMoveId = null;
      this.updateClass();
    }
  };

  private handleMouseDown = (e: MouseEvent) => {
    if ((e.target as Element).closest('.timeline')) {
      return;
    }

    e.preventDefault();
  };

  private handleClick = (e: MouseEvent) => {
    if ((e.target as Element).closest('.timeline')) {
      return;
    }

    if (this.auto) return;
    this.handleMouseMove();
    this.setPlaying(!this.playing);
    this.button.animate(
      [
        {scale: `0.9`},
        {
          scale: `1`,
          easing: 'ease-out',
        },
      ],
      {duration: 200},
    );
  };

  private setState(state: State) {
    this.state = state;
    this.setPlaying(this.playing);
  }

  private setPlaying(value: boolean) {
    if (this.state === State.Ready && (value || (this.auto && !this.hover))) {
      this.player?.togglePlayback(true);
      this.playing = true;
    } else {
      this.player?.togglePlayback(false);
      this.playing = false;
    }
    this.updateClass();
  }

  private updateClass() {
    this.overlay.className = `overlay state-${this.state}`;
    this.canvas.className = `canvas state-${this.state}`;
    this.overlay.classList.toggle('playing', this.playing);
    this.overlay.classList.toggle('auto', this.auto);
    this.overlay.classList.toggle('hover', this.mouseMoveId !== null);

    if (this.connected) {
      if (this.mouseMoveId !== null || !this.playing) {
        this.dataset.overlay = '';
      } else {
        delete this.dataset.overlay;
      }
    }
  }

  private async updateSource(source: string) {
    this.setState(State.Initial);

    this.abortController?.abort();
    this.abortController = new AbortController();

    let project: Project;
    try {
      const promise = import(
        /* webpackIgnore: true */ /* @vite-ignore */ source
      );
      const delay = new Promise(resolve => setTimeout(resolve, 200));
      await Promise.any([delay, promise]);
      this.setState(State.Loading);
      project = (await promise).default;
    } catch (e) {
      console.error(e);
      this.setState(State.Error);
      return;
    }

    this.defaultSettings = project.meta.getFullRenderingSettings();
    const player = new Player(project);
    player.setVariables(this.variables);

    this.finished = false;
    this.player?.onRender.unsubscribe(this.render);
    this.player?.togglePlayback(false);
    this.player?.deactivate();
    this.project = project;
    this.player = player;
    this.updateSettings();
    this.player.onRender.subscribe(this.render);
    this.player.togglePlayback(this.playing);
    if (import.meta.env.DEV) {
      this.player.logger.onLogged.subscribe(console.log);
    }

    this.setState(State.Ready);
  }

  private attributeChangedCallback(name: string, _: any, newValue: any) {
    switch (name) {
      case 'auto':
        this.setPlaying(this.playing);
        break;
      case 'src':
        this.updateSource(newValue);
        break;
      case 'quality':
      case 'width':
      case 'height':
        this.updateSettings();
        break;
      case 'variables':
        this.player?.setVariables(this.variables);
        this.player.requestSeek(this.player.playback.frame); // reseek to update variables immediately
    }
  }

  private disconnectedCallback() {
    this.connected = false;
    this.player?.deactivate();
    this.player?.onRender.unsubscribe(this.render);
  }

  private connectedCallback() {
    this.connected = true;
    this.player?.activate();
    this.player?.onRender.subscribe(this.render);
  }

  private render = async () => {
    if (this.player) {
      await this.stage.render(
        this.player.playback.currentScene,
        this.player.playback.previousScene,
      );

      this.timeline.setAttribute('min', '0');
      this.timeline.setAttribute('step', '1');
      this.timeline.setAttribute(
        'max',
        this.player?.playback.duration.toString(),
      );

      const currentTimeInSeconds = this.player.status.time; // Assuming this gives the current time in seconds
      const durationInSeconds = this.player.status.framesToSeconds(
        this.player.playback.duration,
      ); // Assuming this gives the total duration in seconds
      if (durationInSeconds) {
        const value = this.player.status.secondsToFrames(currentTimeInSeconds);
        this.timeline.value = value.toString();

        const gradientStyle = `linear-gradient(to right, rgb(180, 180, 180) 0%, rgb(180, 180, 180) ${(100 * value) / this.player.status.secondsToFrames(durationInSeconds)}%, white ${(100 * value) / this.player.status.secondsToFrames(durationInSeconds)}%, white 100%)`;
        this.timeline.style.background = gradientStyle; // Standard property
        this.timeline.style.setProperty('--webkit-track', gradientStyle);
        this.timeline.style.setProperty('--moz-track', gradientStyle);
        this.timeline.style.setProperty('--ms-track', gradientStyle);

        const currentTimeFormatted = this.formatTime(currentTimeInSeconds);
        const durationFormatted = this.formatTime(durationInSeconds);

        const currentTimeElement = this.root.querySelector('.current-time');
        if (currentTimeElement) {
          currentTimeElement.textContent = `${currentTimeFormatted} / ${durationFormatted}`;
        }
      }
    }
  };

  private updateSettings() {
    const settings = {
      ...this.defaultSettings,
      size: new Vector2(this.width, this.height),
      resolutionScale: this.quality,
    };
    this.stage.configure(settings);
    this.player.configure(settings);
  }

  private formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
  }
}

if (!customElements.get(ID)) {
  customElements.define(ID, MotionCanvasPlayer);
}
