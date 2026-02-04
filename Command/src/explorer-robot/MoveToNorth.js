"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveToNorth = void 0;
var MoveToNorth = /** @class */ (function () {
    function MoveToNorth(receiver) {
        this.receiver = receiver;
        this.lastPosition = receiver.currentPosition();
    }
    MoveToNorth.prototype.execute = function () {
        this.lastPosition = this.receiver.currentPosition();
        var nextPosition = {
            x: this.lastPosition.x,
            y: this.lastPosition.y + 1,
        };
        this.receiver.moveTo(nextPosition.x, nextPosition.y);
    };
    MoveToNorth.prototype.undo = function () {
        var _a, _b;
        this.receiver.moveTo((_a = this.lastPosition) === null || _a === void 0 ? void 0 : _a.x, (_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.y);
    };
    return MoveToNorth;
}());
exports.MoveToNorth = MoveToNorth;
