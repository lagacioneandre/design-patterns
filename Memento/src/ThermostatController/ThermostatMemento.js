"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThermostatMemento = void 0;
var ThermostatMemento = /** @class */ (function () {
    function ThermostatMemento(temparature, mode) {
        this.temperature = temparature;
        this.mode = mode;
    }
    ThermostatMemento.prototype.getStatus = function () {
        return {
            temperature: this.temperature,
            mode: this.mode,
        };
    };
    return ThermostatMemento;
}());
exports.ThermostatMemento = ThermostatMemento;
