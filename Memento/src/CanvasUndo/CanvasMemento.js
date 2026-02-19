"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasMemento = void 0;
var CanvasMemento = /** @class */ (function () {
    function CanvasMemento(shapes, backgroundColor) {
        this.shapes = [];
        this.shapes = shapes;
        this.backgroundColor = backgroundColor;
    }
    CanvasMemento.prototype.getShapes = function () {
        return this.shapes;
    };
    CanvasMemento.prototype.getBackgroundColor = function () {
        return this.backgroundColor;
    };
    return CanvasMemento;
}());
exports.CanvasMemento = CanvasMemento;
