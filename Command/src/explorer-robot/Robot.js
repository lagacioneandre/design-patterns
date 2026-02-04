"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot() {
        this.coordinates = {
            x: 0,
            y: 0,
        };
    }
    Robot.prototype.moveTo = function (deltaX, deltaY) {
        console.log("Moving to new position, X: ".concat(deltaX, " and Y: ").concat(deltaY));
        this.coordinates = {
            x: deltaX,
            y: deltaY
        };
    };
    Robot.prototype.currentPosition = function () {
        return this.coordinates;
    };
    return Robot;
}());
exports.Robot = Robot;
