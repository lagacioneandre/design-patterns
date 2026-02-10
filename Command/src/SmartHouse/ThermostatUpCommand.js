"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThermostatUpCommand = void 0;
var ThermostatUpCommand = /** @class */ (function () {
    function ThermostatUpCommand(receiver) {
        this.receiver = receiver;
    }
    ThermostatUpCommand.prototype.execute = function () {
        this.receiver.changeTemperature(1);
    };
    return ThermostatUpCommand;
}());
exports.ThermostatUpCommand = ThermostatUpCommand;
