# Fluent 2d Context

Method chaining pattern for canvas 2d context api

## Introduction

This is an implementation of the same API from Canvas 2d Context but with a method chaining or fluent pattern.

#### Current
```javascript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const drawSquare = (x, y, size) => {
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.fillRect(x, y, size, size);
  ctx.closePath();
}
```

#### Fluent
```javascript
const canvas = document.createElement('canvas');
const fctx = new FluentContext(canvas);

const drawSquare = (x, y, size) => {
  fctx.beginPath()
    .fillStyle('#000')
    .fillRect(x, y, size, size)
    .closePath();
}
```

## Usage

### Install

```sh
npm i -S fluent-2d-context

# or

yarn add fluent-2d-context
```

### Implementation

```javascript
import FluentContext from 'fluent-2d-context';
// or
const FluentContext = require('fluent-2d-context');


const canvas = document.createElement('canvas');

const fctx = new FluentContext(canvas);
```

## API

### Instance
```javascript
const fctx = FluentContext(canvas);
```

### Properties

```javascript
fctx.ctx
```
> @returns: An instance of the real Canvas 2d Context

```javascript
fctx.canvas
```
> @returns: An instance of the current canvas

### Canvas State

```javascript
fctx.save();
```
> @returns {*this*}

```javascript
fctx.restore();
```
> @returns {*this*}

### Canvas Transform

```javascript
fctx.getTransform();
```
> @returns {[DOMMatrix](#DOMMatrix)}

```javascript
fctx.resetTransform();
```
> @returns {*this*}

```javascript
fctx.rotate(angle);
```
> @param {Number} angle  
> @returns {*this*}

```javascript
fctx.scale(x, y);
```
> @param {Number} x  
> @param {Number} y  
> @returns {*this*}

```javascript
fctx.setTransform([transform]);
```
> @param {[DOMMatrix2DInit](#DOMMatrix2DInit)} [transform]

```javascript
fctx.setTransform(a, b, c, d, e, f);
```
> @param {Number} a  
> @param {Number} b  
> @param {Number} c  
> @param {Number} d  
> @param {Number} e  
> @param {Number} f  
> @returns {*this*}

```javascript
fctx.transform(a, b, c, d, e, f);
```
> @param {Number} a  
> @param {Number} b  
> @param {Number} c  
> @param {Number} d  
> @param {Number} e  
> @param {Number} f  
> @returns {*this*}

```javascript
fctx.translate(x, y);
```
> @param {Number} x  
> @param {Number} y  
> @returns {*this*}

### Canvas Compositing

```javascript
fctx.globalAlpha(globalAlpha);
```
> Is like `ctx.globalAlpha = {Number};`  
> @param {Number} globalAlpha  
> @returns {*this*}

```javascript
fctx.globalCompositeOperation(globalCompositeOperation);
```
> Is like `ctx.globalCompositeOperation = {String};`  
> @param {String} globalCompositeOperation  
> @returns {*this*}

### Canvas Image Smoothing

```javascript
fctx.imageSmoothingEnabled(imageSmoothingEnabled);
```
> Is like `ctx.imageSmoothingEnabled = {Boolean};`  
> @param {Boolean} imageSmoothingEnabled  
> @returns {*this*}

```javascript
fctx.imageSmoothingQuality(imageSmoothingQuality);
```
> Is like `ctx.imageSmoothingQuality = {("low"|"medium"|"high")};`  
> @param {("low"|"medium"|"high")} imageSmoothingEnabled  
> @returns {*this*}

### Canvas Fill Stroke Styles

```javascript
fctx.fillStyle(fillStyle);
```
> Is like `ctx.fillStyle = {(String|`[CanvasGradient](#CanvasGradient)`|`[CanvasPattern](#CanvasPattern)`)};`  
> @param {String|[CanvasGradient](#CanvasGradient)|[CanvasPattern](#CanvasPattern)} fillStyle  
> @returns {*this*}

```javascript
fctx.strokeStyle(strokeStyle: string | CanvasGradient | CanvasPattern);
```
> Is like `ctx.strokeStyle = {(String|`[CanvasGradient](#CanvasGradient)`|`[CanvasPattern](#CanvasPattern)`)};`  
> @param {String|[CanvasGradient](#CanvasGradient)|[CanvasPattern](#CanvasPattern)} strokeStyle  
> @returns {*this*}

```javascript
fctx.createLinearGradient(x0, y0, x1, y1);
```
> @param {Number} x0  
> @param {Number} y0  
> @param {Number} x1  
> @param {Number} y1  
> @returns {[CanvasGradient](#CanvasGradient)}

```javascript
fctx.createPattern(image, repetition);
```
> @param {[CanvasImageSource](#CanvasImageSource)} image  
> @param {String} repetition  
> @returns {([CanvasPattern](#CanvasPattern)|Null)}

```javascript
fctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
```
> @param {Number} x0  
> @param {Number} y0  
> @param {Number} r0  
> @param {Number} x1  
> @param {Number} y1  
> @param {Number} r1  
> @returns {[CanvasGradient](#CanvasGradient)}


### Canvas Shadow Styles

```javascript
fctx.shadowBlur(shadowBlur: number);
```
> Is like `ctx.shadowBlur = {Number};`  
> @param {Number} shadowBlur  
> @returns {*this*}

```javascript
fctx.shadowColor(shadowColor: string);
```
> Is like `ctx.shadowColor = {String};`  
> @param {String} shadowColor  
> @returns {*this*}

```javascript
fctx.shadowOffsetX(shadowOffsetX: number);
```
> Is like `ctx.shadowOffsetX = {Number};`  
> @param {Number} shadowOffsetX  
> @returns {*this*}

```javascript
fctx.shadowOffsetY(shadowOffsetY: number);
```
> Is like `ctx.shadowOffsetY = {Number};`  
> @param {Number} shadowOffsetY  
> @returns {*this*}

### Canvas Filters

```javascript
fctx.filter(filter: string);
```
> Is like `ctx.filter = {String};`  
> @param {String} filter  
> @returns {*this*}

### Canvas Rect

```javascript
fctx.clearRect(x, y, w, h);
```
> @param {Number} x  
> @param {Number} y  
> @param {Number} w  
> @param {Number} h  
> @returns {*this*}

```javascript
fctx.fillRect(x, y, w, h);
```
> @param {Number} x  
> @param {Number} y  
> @param {Number} w  
> @param {Number} h  
> @returns {*this*}

```javascript
fctx.strokeRect(x, y, w, h);
```
> @param {Number} x  
> @param {Number} y  
> @param {Number} w  
> @param {Number} h  
> @returns {*this*}

### Canvas Draw Path

```javascript
fctx.beginPath();
```
> @returns {*this*}

```javascript
fctx.clip([fillRule]);
```
> @param {"butt"|"round"|"square"} [fillRule]  
> @returns {*this*}

```javascript
fctx.clip(path[, fillRule]);
```
> @param {[Path2D](#Path2D)} path  
> @param {"butt"|"round"|"square"} [fillRule]  
> @returns {*this*}

```javascript
fctx.fill([fillRule]);
```
> @param {"butt"|"round"|"square"} [fillRule]  
> @returns {*this*}


```javascript
fctx.fill(path[, fillRule]);
```
> @param {[Path2D](Path2D)} path  
> @param {"butt"|"round"|"square"} [fillRule]  
> @returns {*this*}

```javascript
fctx.isPointInPath(x, y[, fillRule]);
```
> @param {Number} x  
> @param {Number} y  
> @param {"butt"|"round"|"square"} [fillRule]  
> @returns {Boolean}

```javascript
fctx.isPointInPath(path, x, y[, fillRule]);
```
> @param {[Path2D](Path2D)} path  
> @param {Number} x  
> @param {Number} y  
> @param {"butt"|"round"|"square"} [fillRule]  
> @returns {Boolean}

```javascript
fctx.isPointInStroke(x, y);
```
> @param {Number} x  
> @param {Number} y  
> @returns {Boolean}

```javascript
fctx.isPointInStroke(path, x, y);
```
> @param {[Path2D](Path2D)} path  
> @param {Number} x  
> @param {Number} y  
> @returns {Boolean}

### Canvas User Interface

```javascript
fctx.drawFocusIfNeeded(element);
```
> @param {[Element](#Element)} element  
> @returns {*this*}

```javascript
fctx.drawFocusIfNeeded(path, element);
```
> @param {[Path2D](#Path2D)} path  
> @param {[Element](#Element)} element  
> @returns {*this*}

```javascript
fctx.scrollPathIntoView([path]);
```
> @param {[Path2D](#Path2D)} [path]  
> @returns {*this*}

### Canvas Text

```javascript
fctx.fillText(text, x, y[, maxWidth]);
```
> @param {String} text  
> @param {Number} x  
> @param {Number} y  
> @param {Number} [maxWidth]  
> @returns {*this*}

```javascript
fctx.measureText(text);
```
> @param {String} text  
> @returns {[TextMetrics](#TextMetrics)}

```javascript
fctx.strokeText(text, x, y[, maxWidth]);
```
> @param {String} text  
> @param {Number} x  
> @param {Number} y  
> @param {Number} [maxWidth]  
> @returns {*this*}

### Canvas Draw Image

```javascript
fctx.drawImage(image, dx, dy);
```
> @param {[CanvasImageSource](#CanvasImageSource)} image  
> @param {Number} dx  
> @param {Number} dy  
> @returns {*this*}

```javascript
fctx.drawImage(image, dx, dy, dw, dh);
```
> @param {[CanvasImageSource](#CanvasImageSource)} image  
> @param {Number} dx  
> @param {Number} dy  
> @param {Number} dw  
> @param {Number} dh  
> @returns {*this*}

```javascript
fctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
```
> @param {[CanvasImageSource](#CanvasImageSource)} image  
> @param {Number} sx  
> @param {Number} sy  
> @param {Number} sw  
> @param {Number} sh  
> @param {Number} dx  
> @param {Number} dy  
> @param {Number} dw  
> @param {Number} dh  
> @returns {*this*}

### Canvas Image Data

```javascript
fctx.createImageData(sw, sh);
```
> @param {Number} sw  
> @param {Number} sh  
> @returns {[ImageData](#ImageData)}

```javascript
fctx.createImageData(imagedata);
```
> @param {[ImageData](#ImageData)} imagedata  
> @returns {[ImageData](#ImageData)}

```javascript
fctx.getImageData(sx, sy, sw, sh);
```
> @param {Number} sx  
> @param {Number} sy  
> @param {Number} sw  
> @param {Number} sh  
> @returns {[ImageData](#ImageData)}

```javascript
fctx.putImageData(imagedata, dx, dy);
```
> @param {[ImageData](#ImageData)} imagedata  
> @param {Number} dx  
> @param {Number} dy  
> @returns {*this*}

```javascript
fctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```
> @param {[ImageData](#ImageData)} imagedata  
> @param {Number} dx  
> @param {Number} dy  
> @param {Number} dirtyX  
> @param {Number} dirtyY  
> @param {Number} dirtyWidth  
> @param {Number} dirtyHeight  
> @returns {*this*}

### Canvas Path Drawing Styles

```javascript
fctx.lineCap(lineCap);
```
> @param {"butt"|"round"|"square"} lineCap  
> @returns {*this*}

```javascript
fctx.lineDashOffset(lineDashOffset);
```
> @param {Number} lineDashOffset  
> @returns {*this*}

```javascript
fctx.lineJoin(lineJoin);
```
> @param {"round"|"bevel"|"miter"} lineJoin  
> @returns {*this*}

```javascript
fctx.lineWidth(lineWidth);
```
> @param {Number} lineWidth  
> @returns {*this*}

```javascript
fctx.miterLimit(miterLimit);
```
> @param {Number} miterLimit  
> @returns {*this*}

```javascript
fctx.getLineDash();
```
> @returns {Number[]}

```javascript
fctx.setLineDash(segments);
```
> @param {Number[]} segments  
> @returns {*this*}

### Canvas Text Drawing Styles

```javascript
fctx.direction(direction);
```
> Is like `ctx.direction = {"ltr"|"rtl"|"inherit"};`  
> @param {"ltr"|"rtl"|"inherit"} direction  
> @returns {*this*}

```javascript
fctx.font(font);
```
> Is like `ctx.font = {String};`  
> @param {String} font  
> @returns {*this*}

```javascript
fctx.textAlign(textAlign);
```
> Is like `ctx.textAlign = {"start"|"end"|"left"|"right"|"center"};`  
> @param {"start"|"end"|"left"|"right"|"center"} textAlign  
> @returns {*this*}

```javascript
fctx.textBaseline(textBaseline);
```
> Is like `ctx.textBaseline = {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"};`  
> @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"} textBaseline  
> @returns {*this*}

### Canvas Path

```javascript
fctx.arc(x, y, radius, startAngle, endAngle[, anticlockwise]);
```
> @param {Number} x  
> @param {Number} y  
> @param {Number} radius  
> @param {Number} startAngle  
> @param {Number} endAngle  
> @param {Boolean} [anticlockwise]  
> @returns {*this*}

```javascript
fctx.arcTo(x1, y1, x2, y2, radius);
```
> @param {Number} x1  
> @param {Number} y1  
> @param {Number} x2  
> @param {Number} y2  
> @param {Number} radius  
> @returns {*this*}

```javascript
fctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```
> @param {Number} cp1x  
> @param {Number} cp1y  
> @param {Number} cp2x  
> @param {Number} cp2y  
> @param {Number} x  
> @param {Number} y  
> @returns {*this*}

```javascript
fctx.closePath();
```
> @returns {*this*}

```javascript
fctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle[, anticlockwise]);
```
> @param {Number} x  
> @param {Number} y  
> @param {Number} radiusX  
> @param {Number} radiusY  
> @param {Number} rotation  
> @param {Number} startAngle  
> @param {Number} endAngle  
> @param {Boolean} [anticlockwise]  
> @returns {*this*}

```javascript
fctx.lineTo(x, y);
```
> @param {Number} x  
> @param {Number} y  
> @returns {*this*}

```javascript
fctx.moveTo(x, y);
```
> @param {Number} x  
> @param {Number} y  
> @returns {*this*}

```javascript
fctx.quadraticCurveTo(cpx, cpy, x, y);
```
> @param {Number} cpx  
> @param {Number} cpy  
> @param {Number} x  
> @param {Number} y  
> @returns {*this*}

```javascript
fctx.rect(x, y, w, h);
```
> @param {Number} x  
> @param {Number} y  
> @param {Number} w  
> @param {Number} h  
> @returns {*this*}

## Interfaces

### DOMMatrix

```typescript
interface DOMMatrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  readonly is2D: boolean;
  readonly isIdentity: boolean;
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;
  flipX(): DOMMatrix;
  flipY(): DOMMatrix;
  inverse(): DOMMatrix;
  invertSelf(): DOMMatrix;
  multiply(other?: DOMMatrixInit): DOMMatrix;
  multiplySelf(other?: DOMMatrixInit): DOMMatrix;
  preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
  rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
  rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
  rotateFromVector(x?: number, y?: number): DOMMatrix;
  rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
  scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
  scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
  scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
  scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
  /** @deprecated */
  scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
  setMatrixValue(transformList: string): DOMMatrix;
  skewX(sx?: number): DOMMatrix;
  skewXSelf(sx?: number): DOMMatrix;
  skewY(sy?: number): DOMMatrix;
  skewYSelf(sy?: number): DOMMatrix;
  toFloat32Array(): Float32Array;
  toFloat64Array(): Float64Array;
  toJSON(): any;
  transformPoint(point?: DOMPointInit): DOMPoint;
  translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
  translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;  
}
```

### DOMMatrix2DInit

```typescript
interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}
```

### CanvasGradient

```typescript
/** An opaque object describing a gradient. It is returned by the methods CanvasRenderingContext2D.createLinearGradient() or CanvasRenderingContext2D.createRadialGradient(). */
interface CanvasGradient {
    /**
     * Adds a color stop with the given color to the gradient at the given offset. 0.0 is the offset
     * at one end of the gradient, 1.0 is the offset at the other end.
     * Throws an "IndexSizeError" DOMException if the offset
     * is out of range. Throws a "SyntaxError" DOMException if
     * the color cannot be parsed.
     */
    addColorStop(offset: number, color: string): void;
}
```

### CanvasPattern

```typescript
/** An opaque object describing a pattern, based on an image, a canvas, or a video, created by the CanvasRenderingContext2D.createPattern() method. */
interface CanvasPattern {
    /**
     * Sets the transformation matrix that will be used when rendering the pattern during a fill or
     * stroke painting operation.
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}
```

### CanvasImageSource

```typescript
type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;

type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
```

### Path2D

```typescript
interface Path2D {
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}
```

### Element

```typescript
interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, InnerHTML, Animatable {
    readonly assignedSlot: HTMLSlotElement | null;
    readonly attributes: NamedNodeMap;
    /**
     * Allows for manipulation of element's class content attribute as a
     * set of whitespace-separated tokens through a DOMTokenList object.
     */
    readonly classList: DOMTokenList;
    /**
     * Returns the value of element's class content attribute. Can be set
     * to change it.
     */
    className: string;
    readonly clientHeight: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    /**
     * Returns the value of element's id content attribute. Can be set to
     * change it.
     */
    id: string;
    /**
     * Returns the local name.
     */
    readonly localName: string;
    /**
     * Returns the namespace.
     */
    readonly namespaceURI: string | null;
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    outerHTML: string;
    /**
     * Returns the namespace prefix.
     */
    readonly prefix: string | null;
    readonly scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    /**
     * Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.
     */
    readonly shadowRoot: ShadowRoot | null;
    /**
     * Returns the value of element's slot content attribute. Can be set to
     * change it.
     */
    slot: string;
    /**
     * Returns the HTML-uppercased qualified name.
     */
    readonly tagName: string;
    /**
     * Creates a shadow root for element and returns it.
     */
    attachShadow(init: ShadowRootInit): ShadowRoot;
    /**
     * Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
     */
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest(selector: string): Element | null;
    /**
     * Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.
     */
    getAttribute(qualifiedName: string): string | null;
    /**
     * Returns element's attribute whose namespace is namespace and local name is localName, and null if there is
     * no such attribute otherwise.
     */
    getAttributeNS(namespace: string | null, localName: string): string | null;
    /**
     * Returns the qualified names of all element's attributes.
     * Can contain duplicates.
     */
    getAttributeNames(): string[];
    getAttributeNode(name: string): Attr | null;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr | null;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    /**
     * Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * Returns true if element has an attribute whose namespace is namespace and local name is localName.
     */
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    /**
     * Returns true if element has attributes, and false otherwise.
     */
    hasAttributes(): boolean;
    hasPointerCapture(pointerId: number): boolean;
    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null;
    insertAdjacentHTML(where: InsertPosition, html: string): void;
    insertAdjacentText(where: InsertPosition, text: string): void;
    /**
     * Returns true if matching selectors against element's root yields element, and false otherwise.
     */
    matches(selectors: string): boolean;
    msGetRegionContent(): any;
    releasePointerCapture(pointerId: number): void;
    /**
     * Removes element's first attribute whose qualified name is qualifiedName.
     */
    removeAttribute(qualifiedName: string): void;
    /**
     * Removes element's attribute whose namespace is namespace and local name is localName.
     */
    removeAttributeNS(namespace: string | null, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    /**
     * Displays element fullscreen and resolves promise when done.
     * When supplied, options's navigationUI member indicates whether showing
     * navigation UI while in fullscreen is preferred or not. If set to "show", navigation
     * simplicity is preferred over screen space, and if set to "hide", more screen space
     * is preferred. User agents are always free to honor user preference over the application's. The
     * default value "auto" indicates no application preference.
     */
    requestFullscreen(options?: FullscreenOptions): Promise<void>;
    requestPointerLock(): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    /**
     * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
     */
    setAttribute(qualifiedName: string, value: string): void;
    /**
     * Sets the value of element's attribute whose namespace is namespace and local name is localName to value.
     */
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    setPointerCapture(pointerId: number): void;
    /**
     * If force is not given, "toggles" qualifiedName, removing it if it is
     * present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.
     * Returns true if qualifiedName is now present, and false otherwise.
     */
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    webkitMatchesSelector(selectors: string): boolean;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
```

### TextMetrics

```typescript
interface TextMetrics {
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly alphabeticBaseline: number;
    readonly emHeightAscent: number;
    readonly emHeightDescent: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly hangingBaseline: number;
    /**
     * Returns the measurement described below.
     */
    readonly ideographicBaseline: number;
    readonly width: number;
}
```

### ImageData

```typescript
/** The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData(). */
interface ImageData {
    /**
     * Returns the one-dimensional array containing the data in RGBA order, as integers in the
     * range 0 to 255.
     */
    readonly data: Uint8ClampedArray;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in
     * pixels.
     */
    readonly height: number;
    readonly width: number;
}
```
