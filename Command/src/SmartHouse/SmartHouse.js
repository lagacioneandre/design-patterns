"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHouse = void 0;
var SmartHouse = /** @class */ (function () {
    function SmartHouse() {
        this.isLightOn = false;
        this.temperature = 15;
    }
    SmartHouse.prototype.toggleLight = function (lightState) {
        this.isLightOn = lightState;
        console.log("Light now is ".concat(this.isLightOn ? 'on' : 'off', "!"));
    };
    SmartHouse.prototype.changeTemperature = function (totalOfChange) {
        this.temperature += totalOfChange;
        console.log("Temperature is changed to ".concat(this.temperature, " degrees!"));
    };
    return SmartHouse;
}());
exports.SmartHouse = SmartHouse;
