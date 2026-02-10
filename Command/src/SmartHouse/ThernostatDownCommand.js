"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThermostatDownCommand = void 0;
var ThermostatDownCommand = /** @class */ (function () {
    function ThermostatDownCommand(receiver) {
        this.receiver = receiver;
    }
    ThermostatDownCommand.prototype.execute = function () {
        this.receiver.changeTemperature(-1);
    };
    return ThermostatDownCommand;
}());
exports.ThermostatDownCommand = ThermostatDownCommand;
