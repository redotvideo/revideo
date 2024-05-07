// @ts-nocheck
import type {PlayerSettings, Project, StageSettings} from '@revideo/core';
import {Player, Stage} from '@revideo/core';

import {Vector2} from '@revideo/core';

const styles = `
.initial {
	display: none;
  }
  .state-initial .initial {
	display: block;
  }
  .loading {
	display: none;
  }
  .state-loading .loading {
	display: block;
  }
  .ready {
	display: none;
  }
  .state-ready .ready {
	display: block;
  }
  .error {
	display: none;
  }
  .state-error .error {
	display: block;
  }
  :host {
	position: relative;
	display: block;
  }
  .controls {
	position: absolute;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	bottom: 0%;
	height: 10%;
	background: linear-gradient(
	  0deg,
	  rgba(0, 0, 0, 0.3) 0%,
	  rgba(0, 0, 0, 0) 100%
	);
  }
  .timeline-container {
	height: 100%;
	width: calc(100% - 32px);
	top: 0%;
	position: absolute;
	z-index: 5;
  }
  .timeline {
	position: absolute;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin-left: 16px;
	margin-right: 16px;
	width: 100%;
	background: transparent;
	cursor: pointer;
	background-size: 100% 40px;
	background-repeat: no-repeat;
	bottom: 10px;
	z-index: 10;
  }
  .timeline::-webkit-slider-runnable-track {
	width: 100%;
	height: 5px;
	background: white;
	background: var(--webkit-track, white);
  }
  .timeline:hover::-webkit-slider-runnable-track {
	width: 100%;
	height: 5px;
	background: white;
	background: var(--webkit-track, white);
  }
  .timeline::-moz-range-track {
	width: 100%;
	height: 5px;
	background: white;
	background: var(--moz-track, white);
  }
  .timeline::-ms-track {
	width: 100%;
	height: 4px;
	background: white;
	background: var(--ms-track, rgb(201, 199, 199));
  }
  .timeline::-webkit-slider-thumb {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 16px;
	height: 16px;
	background: #fff;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.2s ease;
	margin-top: -6px;
  }
  .timeline::-moz-range-thumb {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 16px;
	height: 16px;
	background: #fff;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.2s ease;
	margin-top: -6px;
  }
  .timeline::-ms-thumb {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 16px;
	height: 16px;
	background: #fff;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.2s ease;
	margin-top: -6px;
  }
  .timeline:hover::-webkit-slider-thumb {
	opacity: 1;
	background: #fff;
  }
  .timeline:hover::-moz-range-thumb {
	opacity: 1;
	background: #fff;
  }
  .timeline:hover::-ms-thumb {
	opacity: 1;
	background: #fff;
  }
  .overlay {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.1s;
	z-index: 0;
  }
  .overlay.state-ready:not(.auto) {
	cursor: pointer;
  }
  .overlay.playing:not(.hover):hover {
	cursor: none;
  }
  .overlay.hover,
  .overlay.state-ready:focus-within,
  .overlay.state-ready:not(.playing) {
	opacity: 1;
  }
  .overlay.state-loading,
  .overlay.state-error {
	opacity: 1;
	transition: opacity 1s;
  }
  .overlay.state-ready.auto {
	opacity: 0;
  }
  .button {
	width: 16px;
	position: absolute;
	bottom: 25px;
	left: 14px;
	height: 14px;
	transition:
	  scale 0.1s ease-in,
	  opacity 0.1s;
	background-color: transparent;
	border: none;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	cursor: inherit;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMS4wMDE0VjExLjM2MTRDMCAxMi4xNTE0IDAuODcgMTIuNjMxNCAxLjU0IDEyLjIwMTRMOS42OCA3LjAyMTRDMTAuMyA2LjYzMTQgMTAuMyA1LjczMTQgOS42OCA1LjMzMTRMMS41NCAwLjE2MTQwNUMwLjg3IC0wLjI2ODU5NiAwIDAuMjExNDA1IDAgMS4wMDE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
  }
  .playing .play-button {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEMxLjQ2OTU3IDAgMC45NjA4NTkgMC4yMTA3MTQgMC41ODU3ODYgMC41ODU3ODZDMC4yMTA3MTQgMC45NjA4NTkgMCAxLjQ2OTU3IDAgMlYxMkMwIDEyLjUzMDQgMC4yMTA3MTQgMTMuMDM5MSAwLjU4NTc4NiAxMy40MTQyQzAuOTYwODU5IDEzLjc4OTMgMS40Njk1NyAxNCAyIDE0QzIuNTMwNDMgMTQgMy4wMzkxNCAxMy43ODkzIDMuNDE0MjEgMTMuNDE0MkMzLjc4OTI5IDEzLjAzOTEgNCAxMi41MzA0IDQgMTJWMkM0IDEuNDY5NTcgMy43ODkyOSAwLjk2MDg1OSAzLjQxNDIxIDAuNTg1Nzg2QzMuMDM5MTQgMC4yMTA3MTQgMi41MzA0MyAwIDIgMFpNMTAgMEM5LjQ2OTU3IDAgOC45NjA4NiAwLjIxMDcxNCA4LjU4NTc5IDAuNTg1Nzg2QzguMjEwNzEgMC45NjA4NTkgOCAxLjQ2OTU3IDggMlYxMkM4IDEyLjUzMDQgOC4yMTA3MSAxMy4wMzkxIDguNTg1NzkgMTMuNDE0MkM4Ljk2MDg2IDEzLjc4OTMgOS40Njk1NyAxNCAxMCAxNEMxMC41MzA0IDE0IDExLjAzOTEgMTMuNzg5MyAxMS40MTQyIDEzLjQxNDJDMTEuNzg5MyAxMy4wMzkxIDEyIDEyLjUzMDQgMTIgMTJWMkMxMiAxLjQ2OTU3IDExLjc4OTMgMC45NjA4NTkgMTEuNDE0MiAwLjU4NTc4NkMxMS4wMzkxIDAuMjEwNzE0IDEwLjUzMDQgMCAxMCAwWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
  }
  .auto .play-button {
	display: none;
  }
  .current-time {
	position: absolute;
	left: 44px;
	bottom: 25px;
	color: #fff;
	font-family: Arial, sans-serif;
	font-size: 14px;
	line-height: 14px;
  }
  .canvas {
	width: 100%;
	display: block;
	opacity: 0;
	transition: opacity 0.1s;
  }
  .canvas.state-ready {
	opacity: 1;
  }
  .message {
	font-family:
	  JetBrains Mono,
	  sans-serif;
	text-align: center;
	font-size: 20px;
	padding: 8px 16px;
	margin: 16px;
	border-radius: 4px;
	color: #fff9;
	background-color: #000000de;
  }
  .loader {
	width: 50%;
	max-width: 96px;
	display: none;
	rotate: -90deg;
	animation:
	  stroke 2s cubic-bezier(0.5, 0, 0.5, 1) infinite,
	  rotate 2s linear infinite;
  }
  @keyframes stroke {
	0% {
	  stroke-dasharray: 5.6548667765px 50.8938009883px;
	  stroke-dashoffset: 2.8274333882px;
	}
	50% {
	  stroke-dasharray: 50.8938009883px 5.6548667765px;
	  stroke-dashoffset: -2.8274333882px;
	}
	to {
	  stroke-dasharray: 5.6548667765px 50.8938009883px;
	  stroke-dashoffset: -53.7212343766px;
	}
  }
  @keyframes rotate {
	0% {
	  rotate: -110deg;
	}
	to {
	  rotate: 250deg;
	}
  }
`;

const html = `
<div class="overlay" part="overlay">
  <div class="controls">
    <button
      part="play-button"
      title="Play / Pause"
      class="button play-button ready"
      tabindex="0"
    ></button>
    <!-- New button to the right -->
    <span class="current-time" part="current-time">0:00 / 0:00</span>
    <div class="timeline-container">
      <input
        type="range"
        class="timeline"
        value="0"
        min="0"
        max="100"
        step="1"
      />
    </div>
  </div>
  <div part="message" class="message error">
    An error occurred while loading the animation.
  </div>
  <svg
    part="loader"
    class="loader loading"
    viewBox="0 0 24 24"
    stroke="#ffffff"
    stroke-width="2"
    fill="transparent"
  ></svg>
</div>
`;

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
    return [
      'src',
      'playing',
      'quality',
      'width',
      'height',
      'auto',
      'variables',
    ];
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
    // if (import.meta.env.DEV) {
    // this.player.logger.onLogged.subscribe(console.log);
    // }

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
      case 'playing':
        this.setPlaying(newValue === 'true');
        break;
      case 'quality':
      case 'width':
      case 'height':
        this.updateSettings();
        break;
      case 'variables':
        this.player?.setVariables(this.variables);
        this.player?.requestSeek(this.player.playback.frame); // reseek to update variables immediately
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

      const currentTimeInSeconds = this.player.status.time;
      const durationInSeconds = this.player.status.framesToSeconds(
        this.player.playback.duration,
      );
      if (durationInSeconds) {
        const value = this.player.status.secondsToFrames(currentTimeInSeconds);
        this.timeline.value = value.toString();

        const gradientStyle = `linear-gradient(to right, rgb(180, 180, 180) 0%, rgb(180, 180, 180) ${(100 * value) / this.player.status.secondsToFrames(durationInSeconds)}%, white ${(100 * value) / this.player.status.secondsToFrames(durationInSeconds)}%, white 100%)`;
        this.timeline.style.background = gradientStyle;
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
