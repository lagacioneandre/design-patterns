"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightReceiver = void 0;
var LightReceiver = /** @class */ (function () {
    function LightReceiver() {
        this.isOn = false;
    }
    LightReceiver.prototype.turnOn = function () {
        console.log('Turning lights on!');
        this.isOn = true;
        return true;
    };
    LightReceiver.prototype.turnOff = function () {
        console.log('Turning lights off!');
        this.isOn = false;
        return true;
    };
    Object.defineProperty(LightReceiver.prototype, "currentState", {
        get: function () {
            return this.isOn;
        },
        enumerable: false,
        configurable: true
    });
    return LightReceiver;
}());
exports.LightReceiver = LightReceiver;
