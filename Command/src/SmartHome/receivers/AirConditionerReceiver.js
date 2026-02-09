"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditionerReceiver = void 0;
var AirConditionerReceiver = /** @class */ (function () {
    function AirConditionerReceiver() {
        this.isOn = false;
    }
    AirConditionerReceiver.prototype.powerOn = function () {
        console.log('Powering air conditioner on!');
        this.isOn = true;
        return true;
    };
    AirConditionerReceiver.prototype.powerOff = function () {
        console.log('Powerinf air conditioner off!');
        this.isOn = false;
        return true;
    };
    Object.defineProperty(AirConditionerReceiver.prototype, "currentState", {
        get: function () {
            return this.isOn;
        },
        enumerable: false,
        configurable: true
    });
    return AirConditionerReceiver;
}());
exports.AirConditionerReceiver = AirConditionerReceiver;
