"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditionerCommand = void 0;
var AirConditionerCommand = /** @class */ (function () {
    function AirConditionerCommand(receiver, powerItOn) {
        this.receiver = receiver;
        this.powerItOn = powerItOn;
    }
    AirConditionerCommand.prototype.execute = function () {
        this.previousState = this.receiver.currentState;
        if (this.powerItOn) {
            return this.receiver.powerOn();
        }
        return this.receiver.powerOff();
    };
    AirConditionerCommand.prototype.undo = function () {
        if (this.previousState) {
            this.receiver.powerOff();
        }
        else {
            this.receiver.powerOn();
        }
    };
    return AirConditionerCommand;
}());
exports.AirConditionerCommand = AirConditionerCommand;
