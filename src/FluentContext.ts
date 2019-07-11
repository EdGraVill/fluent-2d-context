export class FluentContext {
  public readonly ctx = this.canvas.getContext("2d")!;

  public constructor(public readonly canvas: HTMLCanvasElement) {
    return this;
  }

  // Canvas State
  public restore(): this {
    this.ctx.restore();
    return this;
  }
  public save(): this {
    this.ctx.save();
    return this;
  }

  // Canvas Transform
  public getTransform(): DOMMatrix {
    return this.ctx.getTransform();
  }
  public resetTransform(): this {
    this.ctx.resetTransform();
    return this;
  }
  public rotate(angle: number): this {
    this.ctx.rotate(angle);
    return this;
  }
  public scale(x: number, y: number): this {
    this.ctx.scale(x, y);
    return this;
  }
  public setTransform(a: number, b: number, c: number, d: number, e: number, f: number): this;
  public setTransform(transform?: DOMMatrix2DInit): this;
  public setTransform(a?: number | DOMMatrix2DInit, b?: number, c?: number, d?: number, e?: number, f?: number): this {
    if (typeof a === "number" && b && c && d && e && f) {
      this.ctx.setTransform(a, b, c, d, e, f);
    } else if (typeof a === "undefined" || typeof a === "object") {
      this.ctx.setTransform(a);
    }

    return this;
  }
  public transform(a: number, b: number, c: number, d: number, e: number, f: number): this {
    this.ctx.transform(a, b, c, d, e, f);
    return this;
  }
  public translate(x: number, y: number): this {
    this.ctx.translate(x, y);
    return this;
  }

  // Canvas Compositing
  public globalAlpha(globalAlpha: number): this {
    this.ctx.globalAlpha = globalAlpha;
    return this;
  }
  public globalCompositeOperation(globalCompositeOperation: string): this {
    this.ctx.globalCompositeOperation = globalCompositeOperation;
    return this;
  }

  // Canvas Image Smoothing
  public imageSmoothingEnabled(imageSmoothingEnabled: boolean): this {
    this.ctx.imageSmoothingEnabled = imageSmoothingEnabled;
    return this;
  }
  public imageSmoothingQuality(imageSmoothingQuality: ImageSmoothingQuality): this {
    this.ctx.imageSmoothingQuality = imageSmoothingQuality;
    return this;
  }

  // Canvas Fill Stroke Styles
  public fillStyle(fillStyle: string | CanvasGradient | CanvasPattern): this {
    this.ctx.fillStyle = fillStyle;
    return this;
  }
  public strokeStyle(strokeStyle: string | CanvasGradient | CanvasPattern): this {
    this.ctx.strokeStyle = strokeStyle;
    return this;
  }
  public createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
    return this.ctx.createLinearGradient(x0, y0, x1, y1);
  }
  public createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null {
    return this.ctx.createPattern(image, repetition);
  }
  public createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient {
    return this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  }

  // Canvas Shadow Styles
  public shadowBlur(shadowBlur: number): this {
    this.ctx.shadowBlur = shadowBlur;
    return this;
  }
  public shadowColor(shadowColor: string): this {
    this.ctx.shadowColor = shadowColor;
    return this;
  }
  public shadowOffsetX(shadowOffsetX: number): this {
    this.ctx.shadowOffsetX = shadowOffsetX;
    return this;
  }
  public shadowOffsetY(shadowOffsetY: number): this {
    this.ctx.shadowOffsetY = shadowOffsetY;
    return this;
  }

  // Canvas Filters
  public filter(filter: string): this {
    this.ctx.filter = filter;
    return this;
  }

  // Canvas Rect
  public clearRect(x: number, y: number, w: number, h: number): this {
    this.ctx.clearRect(x, y, w, h);
    return this;
  }
  public fillRect(x: number, y: number, w: number, h: number): this {
    this.ctx.fillRect(x, y, w, h);
    return this;
  }
  public strokeRect(x: number, y: number, w: number, h: number): this {
    this.ctx.strokeRect(x, y, w, h);
    return this;
  }

  // Canvas Draw Path
  public beginPath(): this {
    this.ctx.beginPath();
    return this;
  }
  public clip(fillRule?: CanvasFillRule): this;
  public clip(path: Path2D, fillRule?: CanvasFillRule): this;
  public clip(path?: Path2D | CanvasFillRule, fillRule?: CanvasFillRule): this {
    if (path instanceof Path2D) {
      this.ctx.clip(path, fillRule);
    } else {
      this.ctx.clip(path);
    }

    return this;
  }
  public fill(fillRule?: CanvasFillRule): this;
  public fill(path: Path2D, fillRule?: CanvasFillRule): this;
  public fill(path?: Path2D | CanvasFillRule, fillRule?: CanvasFillRule): this {
    if (path instanceof Path2D) {
      this.ctx.fill(path, fillRule);
    } else {
      this.ctx.fill(path);
    }

    return this;
  }
  public isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  public isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
  public isPointInPath(
    path: Path2D | number, x: number, y?: number | CanvasFillRule, fillRule?: CanvasFillRule,
  ): boolean {
    if (path instanceof Path2D && typeof y === "number") {
      return this.ctx.isPointInPath(path, x, y, fillRule);
    } else if (typeof path === "number" && typeof y !== "number") {
      return this.ctx.isPointInPath(path, x, y);
    }

    return false;
  }
  public isPointInStroke(x: number, y: number): boolean;
  public isPointInStroke(path: Path2D, x: number, y: number): boolean;
  public isPointInStroke(path: Path2D | number, x: number, y?: number): boolean {
    if (path instanceof Path2D && y) {
      return this.ctx.isPointInStroke(path, x, y);
    } else if (typeof path === "number") {
      return this.ctx.isPointInStroke(path, x);
    }
    return false;
  }
  public stroke(path?: Path2D): this {
    if (!path) {
      this.ctx.stroke();
    } else {
      this.ctx.stroke(path);
    }

    return this;
  }

  // Canvas User Interface
  public drawFocusIfNeeded(element: Element): this;
  public drawFocusIfNeeded(path: Path2D, element: Element): this;
  public drawFocusIfNeeded(path: Path2D | Element, element?: Element): this {
    if (path instanceof Element && !element) {
      this.ctx.drawFocusIfNeeded(path);
    } else if (path instanceof Path2D && !!element) {
      this.ctx.drawFocusIfNeeded(path, element);
    }

    return this;
  }
  public scrollPathIntoView(path?: Path2D): this {
    if (path) {
      this.ctx.scrollPathIntoView(path);
    } else {
      this.ctx.scrollPathIntoView();
    }

    return this;
  }

  // Canvas Text
  public fillText(text: string, x: number, y: number, maxWidth?: number): this {
    this.ctx.fillText(text, x, y, maxWidth);

    return this;
  }
  public measureText(text: string): TextMetrics {
    return this.ctx.measureText(text);
  }
  public strokeText(text: string, x: number, y: number, maxWidth?: number): this {
    this.ctx.strokeText(text, x, y, maxWidth);

    return this;
  }

  // Canvas Draw Image
  public drawImage(image: CanvasImageSource, dx: number, dy: number): this;
  public drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): this;
  public drawImage(
    image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number,
    dh: number,
  ): this;
  public drawImage(
    image: CanvasImageSource, sx: number, sy: number, sw?: number, sh?: number, dx?: number, dy?: number, dw?: number,
    dh?: number,
  ): this {
    if (sw && sh && dx && dy && dw && dh) {
      this.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    } else if (sw && sh) {
      this.ctx.drawImage(image, sx, sy, sw, sh);
    } else {
      this.ctx.drawImage(image, sx, sy);
    }

    return this;
  }

  // Canvas Image Data
  public createImageData(sw: number, sh: number): ImageData;
  public createImageData(imagedata: ImageData): ImageData;
  public createImageData(imagedata: ImageData | number, sh?: number): ImageData {
    if (typeof imagedata === "number" && sh) {
      return this.ctx.createImageData(imagedata, sh);
    }

    return this.ctx.createImageData(imagedata as ImageData);
  }
  public getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
    return this.ctx.getImageData(sx, sy, sw, sh);
  }
  public putImageData(imagedata: ImageData, dx: number, dy: number): this;
  public putImageData(
    imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number,
    dirtyHeight: number,
  ): this;
  public putImageData(
    imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number,
    dirtyHeight?: number,
  ): this {
    if (dirtyX && dirtyY && dirtyWidth && dirtyHeight) {
      this.ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
    } else {
      this.ctx.putImageData(imagedata, dx, dy);
    }

    return this;
  }

  // Canvas Path Drawing Styles
  public lineCap(lineCap: CanvasLineCap): this {
    this.ctx.lineCap = lineCap;
    return this;
  }
  public lineDashOffset(lineDashOffset: number): this {
    this.ctx.lineDashOffset = lineDashOffset;
    return this;
  }
  public lineJoin(lineJoin: CanvasLineJoin): this {
    this.ctx.lineJoin = lineJoin;
    return this;
  }
  public lineWidth(lineWidth: number): this {
    this.ctx.lineWidth = lineWidth;
    return this;
  }
  public miterLimit(miterLimit: number): this {
    this.ctx.miterLimit = miterLimit;
    return this;
  }
  public getLineDash(): number[] {
    return this.ctx.getLineDash();
  }
  public setLineDash(segments: number[]): this {
    this.ctx.setLineDash(segments);

    return this;
  }

  // Canvas Text Drawing Styles
  public direction(direction: CanvasDirection): this {
    this.ctx.direction = direction;
    return this;
  }
  public font(font: string): this {
    this.ctx.font = font;
    return this;
  }
  public textAlign(textAlign: CanvasTextAlign): this {
    this.ctx.textAlign = textAlign;
    return this;
  }
  public textBaseline(textBaseline: CanvasTextBaseline): this {
    this.ctx.textBaseline = textBaseline;
    return this;
  }

  // Canvas Path
  public arc(
    x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean,
  ): this {
    this.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  public arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this {
    this.ctx.arcTo(x1, y1, x2, y2, radius);
    return this;
  }
  public bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this {
    this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    return this;
  }
  public closePath(): this {
    this.ctx.closePath();
    return this;
  }
  public ellipse(
    x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number,
    anticlockwise?: boolean,
  ): this {
    this.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    return this;
  }
  public lineTo(x: number, y: number): this {
    this.ctx.lineTo(x, y);
    return this;
  }
  public moveTo(x: number, y: number): this {
    this.ctx.moveTo(x, y);
    return this;
  }
  public quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this {
    this.ctx.quadraticCurveTo(cpx, cpy, x, y);
    return this;
  }
  public rect(x: number, y: number, w: number, h: number): this {
    this.ctx.rect(x, y, w, h);
    return this;
  }
}
