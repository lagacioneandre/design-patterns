"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var CanvasMemento_1 = require("./CanvasMemento");
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.shapes = [];
    }
    Canvas.prototype.addShape = function (shape) {
        console.log("".concat(shape, " added!"));
        this.shapes.push(shape);
    };
    Canvas.prototype.setBackgroundColor = function (color) {
        console.log("".concat(color, " defined as background color!"));
        this.backgroundColor = color;
    };
    Canvas.prototype.save = function () {
        console.log('Saving...', JSON.stringify(this.shapes));
        return new CanvasMemento_1.CanvasMemento(__spreadArray([], this.shapes, true), this.backgroundColor);
    };
    Canvas.prototype.restore = function (memento) {
        console.log('Restoring...');
        var mementoShapes = memento.getShapes();
        console.log(mementoShapes);
        this.shapes = new (Array.bind.apply(Array, __spreadArray([void 0], mementoShapes, false)))();
        console.log('Actual state: ', JSON.stringify(this.shapes));
    };
    return Canvas;
}());
exports.Canvas = Canvas;
