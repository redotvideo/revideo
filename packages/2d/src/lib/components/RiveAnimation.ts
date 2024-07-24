import {
  BBox,
  SignalValue,
  SimpleSignal,
  useThread,
  viaProxy,
} from '@revideo/core';
import Rive, {
  Artboard,
  File,
  LinearAnimationInstance,
  Renderer,
  RiveCanvas,
} from '@rive-app/canvas-advanced';
import {computed, initial, nodeName, signal} from '../decorators';
import {Asset} from './Asset';
import {RectProps} from './Rect';

export interface RiveAnimationProps extends RectProps {
  src?: SignalValue<string>;
  artboardId?: SignalValue<string | number>;
  animationId?: SignalValue<string | number>;
}

interface RiveAnimationInstance {
  rive: RiveCanvas;
  renderer: Renderer;
  artboard: Artboard;
  animation: LinearAnimationInstance;
  canvas: HTMLCanvasElement;
}

@nodeName('RiveAnimation')
export class RiveAnimation extends Asset {
  @initial(0)
  @signal()
  public declare readonly artboardId: SimpleSignal<number | string, this>;

  @initial(0)
  @signal()
  public declare readonly animationId: SimpleSignal<number | string, this>;

  @initial(0)
  @signal()
  protected declare readonly time: SimpleSignal<number, this>;

  protected currentTime: number = 0;
  protected lastTime: number = 0;

  public constructor(props: RiveAnimationProps) {
    super(props);

    const time = useThread().time;
    const start = time();
    this.time(() => time() - start);
  }

  @computed()
  private async rive(): Promise<RiveAnimationInstance> {
    const src = viaProxy(this.fullSource());
    const rive = await Rive({
      locateFile: () =>
        `https://unpkg.com/@rive-app/canvas-advanced@2.7.3/rive.wasm`,
    });
    const canvas = document.createElement('canvas');
    canvas.width = this.width();
    canvas.height = this.height();

    const renderer = rive.makeRenderer(canvas);
    const bytes = await (await fetch(new Request(src))).arrayBuffer();
    const file = (await rive.load(new Uint8Array(bytes))) as File;

    const artboartId = this.artboardId();
    const artboard =
      typeof artboartId === 'string'
        ? file.artboardByName(artboartId)
        : typeof this.artboardId() === 'number'
          ? file.artboardByIndex(artboartId)
          : file.defaultArtboard();

    const animationId = this.animationId();
    const animation = new rive.LinearAnimationInstance(
      typeof animationId === 'number'
        ? artboard.animationByIndex(animationId)
        : typeof animationId === 'string'
          ? artboard.animationByName(animationId)
          : artboard.animationByIndex(0),
      artboard,
    );

    return {rive, renderer, artboard, animation, canvas};
  }

  protected override async draw(context: CanvasRenderingContext2D) {
    this.drawShape(context);
    const {rive, renderer, canvas, artboard, animation} = await this.rive();
    const box = BBox.fromSizeCentered(this.computedSize());

    this.currentTime = this.time();
    const timeToAdvance = this.currentTime - this.lastTime;
    this.lastTime = this.currentTime;

    const renderPromise = new Promise<void>(resolve => {
      function renderLoop() {
        renderer.clear();
        animation.advance(timeToAdvance);
        animation.apply(1);

        artboard.advance(timeToAdvance);

        renderer.save();
        renderer.align(
          rive.Fit.fill,
          rive.Alignment.center,
          {
            minX: 0,
            minY: 0,
            maxX: canvas.width,
            maxY: canvas.height,
          },
          artboard.bounds,
        );

        artboard.draw(renderer);
        renderer.restore();
        resolve();
      }

      rive.requestAnimationFrame(renderLoop);
    });

    await renderPromise;

    context.drawImage(canvas, box.x, box.y, box.width, box.height);
    if (this.clip()) {
      context.clip(this.getPath());
    }

    await this.drawChildren(context);
  }
}
