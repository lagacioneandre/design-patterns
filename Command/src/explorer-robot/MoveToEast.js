"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveToEast = void 0;
var MoveToEast = /** @class */ (function () {
    function MoveToEast(receiver) {
        this.receiver = receiver;
        this.lastPosition = receiver.currentPosition();
    }
    MoveToEast.prototype.execute = function () {
        this.lastPosition = this.receiver.currentPosition();
        var nextPosition = {
            x: this.lastPosition.x + 1,
            y: this.lastPosition.y,
        };
        this.receiver.moveTo(nextPosition.x, nextPosition.y);
    };
    MoveToEast.prototype.undo = function () {
        var _a, _b;
        this.receiver.moveTo((_a = this.lastPosition) === null || _a === void 0 ? void 0 : _a.x, (_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.y);
    };
    return MoveToEast;
}());
exports.MoveToEast = MoveToEast;
