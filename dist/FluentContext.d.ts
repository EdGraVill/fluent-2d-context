export declare class FluentContext {
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement);
    restore(): this;
    save(): this;
    getTransform(): DOMMatrix;
    resetTransform(): this;
    rotate(angle: number): this;
    scale(x: number, y: number): this;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): this;
    setTransform(transform?: DOMMatrix2DInit): this;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): this;
    translate(x: number, y: number): this;
    globalAlpha(globalAlpha: number): this;
    globalCompositeOperation(globalCompositeOperation: string): this;
    imageSmoothingEnabled(imageSmoothingEnabled: boolean): this;
    imageSmoothingQuality(imageSmoothingQuality: ImageSmoothingQuality): this;
    fillStyle(fillStyle: string | CanvasGradient | CanvasPattern): this;
    strokeStyle(strokeStyle: string | CanvasGradient | CanvasPattern): this;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    shadowBlur(shadowBlur: number): this;
    shadowColor(shadowColor: string): this;
    shadowOffsetX(shadowOffsetX: number): this;
    shadowOffsetY(shadowOffsetY: number): this;
    filter(filter: string): this;
    clearRect(x: number, y: number, w: number, h: number): this;
    fillRect(x: number, y: number, w: number, h: number): this;
    strokeRect(x: number, y: number, w: number, h: number): this;
    beginPath(): this;
    clip(fillRule?: CanvasFillRule): this;
    clip(path: Path2D, fillRule?: CanvasFillRule): this;
    fill(fillRule?: CanvasFillRule): this;
    fill(path: Path2D, fillRule?: CanvasFillRule): this;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    stroke(path?: Path2D): this;
    drawFocusIfNeeded(element: Element): this;
    drawFocusIfNeeded(path: Path2D, element: Element): this;
    scrollPathIntoView(path?: Path2D): this;
    fillText(text: string, x: number, y: number, maxWidth?: number): this;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): this;
    drawImage(image: CanvasImageSource, dx: number, dy: number): this;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): this;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): this;
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): this;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): this;
    lineCap(lineCap: CanvasLineCap): this;
    lineDashOffset(lineDashOffset: number): this;
    lineJoin(lineJoin: CanvasLineJoin): this;
    lineWidth(lineWidth: number): this;
    miterLimit(miterLimit: number): this;
    getLineDash(): number[];
    setLineDash(segments: number[]): this;
    direction(direction: CanvasDirection): this;
    font(font: string): this;
    textAlign(textAlign: CanvasTextAlign): this;
    textBaseline(textBaseline: CanvasTextBaseline): this;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    closePath(): this;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;
    lineTo(x: number, y: number): this;
    moveTo(x: number, y: number): this;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this;
    rect(x: number, y: number, w: number, h: number): this;
}
//# sourceMappingURL=FluentContext.d.ts.map