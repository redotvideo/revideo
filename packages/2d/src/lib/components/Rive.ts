import {BBox, SignalValue, SimpleSignal, useThread} from '@revideo/core';
import RiveInitializer, {
  Artboard,
  File,
  LinearAnimationInstance,
  Renderer,
  RiveCanvas,
} from '@rive-app/canvas-advanced';
import {computed, initial, nodeName, signal} from '../decorators';
import {Rect, RectProps} from './Rect';

export interface RiveProps extends RectProps {
  src?: SignalValue<string>;
  artboardId?: SignalValue<string | number>;
  animationId?: SignalValue<string | number>;
}

interface RiveInstance {
  rive: RiveCanvas;
  renderer: Renderer;
  artboard: Artboard;
  animation: LinearAnimationInstance;
  canvas: HTMLCanvasElement;
}

@nodeName('Rive')
export class Rive extends Rect {
  @signal()
  public declare readonly src: SimpleSignal<string, this>;

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

  public constructor(props: RiveProps) {
    super(props);

    const time = useThread().time;
    const start = time();
    this.time(() => time() - start);
  }

  @computed()
  private async rive(): Promise<RiveInstance> {
    const src = this.src();
    const rive = await RiveInitializer({
      locateFile: () => {
        return '/@rive-wasm';
      },
    });
    const canvas = document.createElement('canvas');
    canvas.width = this.width();
    canvas.height = this.height();

    const renderer = rive.makeRenderer(canvas);
    const bytes = await (await fetch(new Request(src))).arrayBuffer();
    const file = (await rive.load(new Uint8Array(bytes))) as File;

    const artboardId = this.artboardId();
    const artboard = this.getArtboard(artboardId, file);

    const animationId = this.animationId();
    const animation = this.getAnimation(animationId, artboard, rive);

    return {rive, renderer, artboard, animation, canvas};
  }

  protected override async draw(context: CanvasRenderingContext2D) {
    this.drawShape(context);

    this.currentTime = this.time();
    const timeToAdvance = this.currentTime - this.lastTime;
    this.lastTime = this.currentTime;

    const {rive, renderer, canvas, artboard, animation} = await this.rive();
    const box = BBox.fromSizeCentered(this.computedSize());

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

  private getArtboard(artboardId: string | number, file: File): Artboard {
    if (typeof artboardId === 'string') {
      return file.artboardByName(artboardId);
    }
    if (typeof artboardId === 'number') {
      return file.artboardByIndex(artboardId);
    }
    return file.defaultArtboard();
  }

  private getAnimation(
    animationId: string | number,
    artboard: Artboard,
    rive: RiveCanvas,
  ): LinearAnimationInstance {
    let animation;
    if (typeof animationId === 'number') {
      animation = artboard.animationByIndex(animationId);
    } else if (typeof animationId === 'string') {
      animation = artboard.animationByName(animationId);
    } else {
      animation = artboard.animationByIndex(0);
    }
    return new rive.LinearAnimationInstance(animation, artboard);
  }
}
