"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightCommand = void 0;
var LightCommand = /** @class */ (function () {
    function LightCommand(recevier, turnItOn) {
        this.receiver = recevier;
        this.turnItOn = turnItOn;
    }
    LightCommand.prototype.execute = function () {
        this.previousState = this.receiver.currentState;
        if (this.turnItOn) {
            return this.receiver.turnOn();
        }
        return this.receiver.turnOff();
        ;
    };
    LightCommand.prototype.undo = function () {
        if (this.previousState) {
            this.receiver.turnOff();
        }
        else {
            this.receiver.turnOn();
        }
    };
    return LightCommand;
}());
exports.LightCommand = LightCommand;
