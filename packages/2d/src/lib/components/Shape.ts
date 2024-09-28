import {
  BBox,
  SignalValue,
  SimpleSignal,
  createSignal,
  easeOutExpo,
  linear,
  map,
  threadable,
} from '@revideo/core';
import * as StackBlur from 'stackblur-canvas';
import {computed, initial, nodeName, signal} from '../decorators';
import {
  CanvasStyleSignal,
  canvasStyleSignal,
} from '../decorators/canvasStyleSignal';
import {PossibleCanvasStyle} from '../partials';
import {resolveCanvasStyle} from '../utils';
import {Layout, LayoutProps} from './Layout';

export interface ShapeProps extends LayoutProps {
  fill?: SignalValue<PossibleCanvasStyle>;
  stroke?: SignalValue<PossibleCanvasStyle>;
  strokeFirst?: SignalValue<boolean>;
  lineWidth?: SignalValue<number>;
  lineJoin?: SignalValue<CanvasLineJoin>;
  lineCap?: SignalValue<CanvasLineCap>;
  lineDash?: SignalValue<number[]>;
  lineDashOffset?: SignalValue<number>;
  antialiased?: SignalValue<boolean>;
  backgroundBlur?: SignalValue<number>;
}

@nodeName('Shape')
export abstract class Shape extends Layout {
  @canvasStyleSignal()
  public declare readonly fill: CanvasStyleSignal<this>;
  @canvasStyleSignal()
  public declare readonly stroke: CanvasStyleSignal<this>;
  @initial(false)
  @signal()
  public declare readonly strokeFirst: SimpleSignal<boolean, this>;
  @initial(0)
  @signal()
  public declare readonly lineWidth: SimpleSignal<number, this>;
  @initial('miter')
  @signal()
  public declare readonly lineJoin: SimpleSignal<CanvasLineJoin, this>;
  @initial('butt')
  @signal()
  public declare readonly lineCap: SimpleSignal<CanvasLineCap, this>;
  @initial([])
  @signal()
  public declare readonly lineDash: SimpleSignal<number[], this>;
  @initial(0)
  @signal()
  public declare readonly lineDashOffset: SimpleSignal<number, this>;
  @initial(true)
  @signal()
  public declare readonly antialiased: SimpleSignal<boolean, this>;
  @initial(0)
  @signal()
  public declare readonly backgroundBlur: SimpleSignal<number, this>;

  protected readonly rippleStrength = createSignal<number, this>(0);

  @computed()
  protected rippleSize() {
    return easeOutExpo(this.rippleStrength(), 0, 50);
  }

  public constructor(props: ShapeProps) {
    super(props);
  }

  protected applyText(context: CanvasRenderingContext2D) {
    context.direction = this.textDirection();
    this.element.dir = this.textDirection();
  }

  protected applyStyle(context: CanvasRenderingContext2D) {
    context.fillStyle = resolveCanvasStyle(this.fill(), context);
    context.strokeStyle = resolveCanvasStyle(this.stroke(), context);
    context.lineWidth = this.lineWidth();
    context.lineJoin = this.lineJoin();
    context.lineCap = this.lineCap();
    context.setLineDash(this.lineDash());
    context.lineDashOffset = this.lineDashOffset();
    if (!this.antialiased()) {
      // from https://stackoverflow.com/a/68372384
      context.filter =
        'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)';
    }
  }

  protected override async draw(context: CanvasRenderingContext2D) {
    this.drawShape(context);
    if (this.clip()) {
      context.clip(this.getPath());
    }
    await this.drawChildren(context);
  }

  protected drawShape(context: CanvasRenderingContext2D) {
    const path = this.getPath();
    const hasStroke = this.lineWidth() > 0 && this.stroke() !== null;
    const hasFill = this.fill() !== null;
    context.save();
    this.applyStyle(context);
    this.drawRipple(context);
    if (this.strokeFirst()) {
      hasStroke && context.stroke(path);
      hasFill && context.fill(path);
    } else {
      hasFill && context.fill(path);
      hasStroke && context.stroke(path);
    }
    context.restore();
  }

  protected override renderFromSource(
    context: CanvasRenderingContext2D,
    source: CanvasImageSource,
    x: number,
    y: number,
  ): void {
    super.renderFromSource(context, source, x, y);
    if (this.backgroundBlur()) {
      const canvasToDraw = this.getBlurredCanvas(context, source, x, y);
      context.globalAlpha = 1;
      context.drawImage(canvasToDraw, 0, 0);
    }
  }

  @computed()
  public override absoluteOpacity(): number {
    if (this.backgroundBlur()) {
      return 1;
    }
    return (this.parent()?.absoluteOpacity() ?? 1) * this.opacity();
  }

  protected getBlurredCanvas(
    context: CanvasRenderingContext2D,
    source: CanvasImageSource,
    x: number,
    y: number,
  ): HTMLCanvasElement {
    const sourceCanvas = source as OffscreenCanvas;

    const copiedCanvas = this.createCanvasWithSameShape(context.canvas);
    const copiedContext = copiedCanvas.getContext('2d');
    copiedContext?.drawImage(context.canvas, 0, 0);

    StackBlur.canvasRGB(
      copiedCanvas,
      x,
      y,
      sourceCanvas.width,
      sourceCanvas.height,
      this.backgroundBlur(),
    );

    const blurredElementCanvas = this.createCanvasWithSameShape(context.canvas);
    const blurredElementContext = blurredElementCanvas.getContext('2d');

    const matrix = this.localToWorld();
    blurredElementContext?.transform(
      matrix.a,
      matrix.b,
      matrix.c,
      matrix.d,
      matrix.e,
      matrix.f,
    );

    blurredElementContext?.clip(this.getPath());
    blurredElementContext?.setTransform(1, 0, 0, 1, 0, 0);
    blurredElementContext?.drawImage(copiedCanvas, 0, 0);

    return blurredElementCanvas;
  }

  private createCanvasWithSameShape(
    canvasToCopy: HTMLCanvasElement | OffscreenCanvas,
  ): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = canvasToCopy.width;
    canvas.height = canvasToCopy.height;
    return canvas;
  }

  protected override getCacheBBox(): BBox {
    return super.getCacheBBox().expand(this.lineWidth() / 2);
  }

  @computed()
  protected getPath(): Path2D {
    return new Path2D();
  }

  protected getRipplePath(): Path2D {
    return new Path2D();
  }

  protected drawRipple(context: CanvasRenderingContext2D) {
    const rippleStrength = this.rippleStrength();
    if (rippleStrength > 0) {
      const ripplePath = this.getRipplePath();
      context.save();
      context.globalAlpha *= map(0.54, 0, rippleStrength);
      context.fill(ripplePath);
      context.restore();
    }
  }

  @threadable()
  public *ripple(duration = 1) {
    this.rippleStrength(0);
    yield* this.rippleStrength(1, duration, linear);
    this.rippleStrength(0);
  }
}
