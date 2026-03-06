"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thermostat = void 0;
var ThermostatMemento_1 = require("./ThermostatMemento");
var Thermostat = /** @class */ (function () {
    function Thermostat() {
    }
    Thermostat.prototype.setSettings = function (temparature, mode) {
        console.log("Setting temperature to ".concat(temparature, " and mode to ").concat(mode));
        this.temperature = temparature;
        this.mode = mode;
    };
    Thermostat.prototype.save = function () {
        console.log('Saving settings...');
        return new ThermostatMemento_1.ThermostatMemento(this.temperature, this.mode);
    };
    Thermostat.prototype.restore = function (memento) {
        var status = memento.getStatus();
        this.temperature = status.temperature;
        this.mode = status.mode;
        console.log("Settings changed, temperature to ".concat(this.temperature, " as mode to ").concat(this.mode));
    };
    return Thermostat;
}());
exports.Thermostat = Thermostat;
