"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveToSouth = void 0;
var MoveToSouth = /** @class */ (function () {
    function MoveToSouth(receiver) {
        this.receiver = receiver;
        this.lastPosition = receiver.currentPosition();
    }
    MoveToSouth.prototype.execute = function () {
        this.lastPosition = this.receiver.currentPosition();
        var nextPosition = {
            x: this.lastPosition.x,
            y: this.lastPosition.y - 1,
        };
        this.receiver.moveTo(nextPosition.x, nextPosition.y);
    };
    MoveToSouth.prototype.undo = function () {
        var _a, _b;
        this.receiver.moveTo((_a = this.lastPosition) === null || _a === void 0 ? void 0 : _a.x, (_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.y);
    };
    return MoveToSouth;
}());
exports.MoveToSouth = MoveToSouth;
