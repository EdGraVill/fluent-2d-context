"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FluentContext {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        return this;
    }
    restore() {
        this.ctx.restore();
        return this;
    }
    save() {
        this.ctx.save();
        return this;
    }
    getTransform() {
        return this.ctx.getTransform();
    }
    resetTransform() {
        this.ctx.resetTransform();
        return this;
    }
    rotate(angle) {
        this.ctx.rotate(angle);
        return this;
    }
    scale(x, y) {
        this.ctx.scale(x, y);
        return this;
    }
    setTransform(a, b, c, d, e, f) {
        if (typeof a === "number" && b && c && d && e && f) {
            this.ctx.setTransform(a, b, c, d, e, f);
        }
        else if (typeof a === "undefined" || typeof a === "object") {
            this.ctx.setTransform(a);
        }
        return this;
    }
    transform(a, b, c, d, e, f) {
        this.ctx.transform(a, b, c, d, e, f);
        return this;
    }
    translate(x, y) {
        this.ctx.translate(x, y);
        return this;
    }
    globalAlpha(globalAlpha) {
        this.ctx.globalAlpha = globalAlpha;
        return this;
    }
    globalCompositeOperation(globalCompositeOperation) {
        this.ctx.globalCompositeOperation = globalCompositeOperation;
        return this;
    }
    imageSmoothingEnabled(imageSmoothingEnabled) {
        this.ctx.imageSmoothingEnabled = imageSmoothingEnabled;
        return this;
    }
    imageSmoothingQuality(imageSmoothingQuality) {
        this.ctx.imageSmoothingQuality = imageSmoothingQuality;
        return this;
    }
    fillStyle(fillStyle) {
        this.ctx.fillStyle = fillStyle;
        return this;
    }
    strokeStyle(strokeStyle) {
        this.ctx.strokeStyle = strokeStyle;
        return this;
    }
    createLinearGradient(x0, y0, x1, y1) {
        return this.ctx.createLinearGradient(x0, y0, x1, y1);
    }
    createPattern(image, repetition) {
        return this.ctx.createPattern(image, repetition);
    }
    createRadialGradient(x0, y0, r0, x1, y1, r1) {
        return this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    }
    shadowBlur(shadowBlur) {
        this.ctx.shadowBlur = shadowBlur;
        return this;
    }
    shadowColor(shadowColor) {
        this.ctx.shadowColor = shadowColor;
        return this;
    }
    shadowOffsetX(shadowOffsetX) {
        this.ctx.shadowOffsetX = shadowOffsetX;
        return this;
    }
    shadowOffsetY(shadowOffsetY) {
        this.ctx.shadowOffsetY = shadowOffsetY;
        return this;
    }
    filter(filter) {
        this.ctx.filter = filter;
        return this;
    }
    clearRect(x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
        return this;
    }
    fillRect(x, y, w, h) {
        this.ctx.fillRect(x, y, w, h);
        return this;
    }
    strokeRect(x, y, w, h) {
        this.ctx.strokeRect(x, y, w, h);
        return this;
    }
    beginPath() {
        this.ctx.beginPath();
        return this;
    }
    clip(path, fillRule) {
        if (path instanceof Path2D) {
            this.ctx.clip(path, fillRule);
        }
        else {
            this.ctx.clip(path);
        }
        return this;
    }
    fill(path, fillRule) {
        if (path instanceof Path2D) {
            this.ctx.fill(path, fillRule);
        }
        else {
            this.ctx.fill(path);
        }
        return this;
    }
    isPointInPath(path, x, y, fillRule) {
        if (path instanceof Path2D && typeof y === "number") {
            return this.ctx.isPointInPath(path, x, y, fillRule);
        }
        else if (typeof path === "number" && typeof y !== "number") {
            return this.ctx.isPointInPath(path, x, y);
        }
        return false;
    }
    isPointInStroke(path, x, y) {
        if (path instanceof Path2D && y) {
            return this.ctx.isPointInStroke(path, x, y);
        }
        else if (typeof path === "number") {
            return this.ctx.isPointInStroke(path, x);
        }
        return false;
    }
    stroke(path) {
        if (!path) {
            this.ctx.stroke();
        }
        else {
            this.ctx.stroke(path);
        }
        return this;
    }
    drawFocusIfNeeded(path, element) {
        if (path instanceof Element && !element) {
            this.ctx.drawFocusIfNeeded(path);
        }
        else if (path instanceof Path2D && !!element) {
            this.ctx.drawFocusIfNeeded(path, element);
        }
        return this;
    }
    scrollPathIntoView(path) {
        if (path) {
            this.ctx.scrollPathIntoView(path);
        }
        else {
            this.ctx.scrollPathIntoView();
        }
        return this;
    }
    fillText(text, x, y, maxWidth) {
        this.ctx.fillText(text, x, y, maxWidth);
        return this;
    }
    measureText(text) {
        return this.ctx.measureText(text);
    }
    strokeText(text, x, y, maxWidth) {
        this.ctx.strokeText(text, x, y, maxWidth);
        return this;
    }
    drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
        if (sw && sh && dx && dy && dw && dh) {
            this.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        else if (sw && sh) {
            this.ctx.drawImage(image, sx, sy, sw, sh);
        }
        else {
            this.ctx.drawImage(image, sx, sy);
        }
        return this;
    }
    createImageData(imagedata, sh) {
        if (typeof imagedata === "number" && sh) {
            return this.ctx.createImageData(imagedata, sh);
        }
        return this.ctx.createImageData(imagedata);
    }
    getImageData(sx, sy, sw, sh) {
        return this.ctx.getImageData(sx, sy, sw, sh);
    }
    putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
        if (dirtyX && dirtyY && dirtyWidth && dirtyHeight) {
            this.ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
        }
        else {
            this.ctx.putImageData(imagedata, dx, dy);
        }
        return this;
    }
    lineCap(lineCap) {
        this.ctx.lineCap = lineCap;
        return this;
    }
    lineDashOffset(lineDashOffset) {
        this.ctx.lineDashOffset = lineDashOffset;
        return this;
    }
    lineJoin(lineJoin) {
        this.ctx.lineJoin = lineJoin;
        return this;
    }
    lineWidth(lineWidth) {
        this.ctx.lineWidth = lineWidth;
        return this;
    }
    miterLimit(miterLimit) {
        this.ctx.miterLimit = miterLimit;
        return this;
    }
    getLineDash() {
        return this.ctx.getLineDash();
    }
    setLineDash(segments) {
        this.ctx.setLineDash(segments);
        return this;
    }
    direction(direction) {
        this.ctx.direction = direction;
        return this;
    }
    font(font) {
        this.ctx.font = font;
        return this;
    }
    textAlign(textAlign) {
        this.ctx.textAlign = textAlign;
        return this;
    }
    textBaseline(textBaseline) {
        this.ctx.textBaseline = textBaseline;
        return this;
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
        this.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        return this;
    }
    arcTo(x1, y1, x2, y2, radius) {
        this.ctx.arcTo(x1, y1, x2, y2, radius);
        return this;
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return this;
    }
    closePath() {
        this.ctx.closePath();
        return this;
    }
    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
        this.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        return this;
    }
    lineTo(x, y) {
        this.ctx.lineTo(x, y);
        return this;
    }
    moveTo(x, y) {
        this.ctx.moveTo(x, y);
        return this;
    }
    quadraticCurveTo(cpx, cpy, x, y) {
        this.ctx.quadraticCurveTo(cpx, cpy, x, y);
        return this;
    }
    rect(x, y, w, h) {
        this.ctx.rect(x, y, w, h);
        return this;
    }
}
exports.FluentContext = FluentContext;
//# sourceMappingURL=FluentContext.js.map