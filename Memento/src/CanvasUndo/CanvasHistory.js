"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasHistory = void 0;
var CanvasHistory = /** @class */ (function () {
    function CanvasHistory(canvas) {
        this.history = [];
        this.canvas = canvas;
    }
    CanvasHistory.prototype.push = function () {
        console.log('Adding new shape.');
        this.history.push(this.canvas.save());
    };
    CanvasHistory.prototype.undo = function () {
        var memento = this.history.pop();
        if (memento) {
            console.log('Removing last shape.');
            this.canvas.restore(memento);
        }
        else {
            console.log('Nothing to undo.');
        }
    };
    return CanvasHistory;
}());
exports.CanvasHistory = CanvasHistory;
