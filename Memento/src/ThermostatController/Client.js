"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Thermostat_1 = require("./Thermostat");
var ThermostatHistory_1 = require("./ThermostatHistory");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var thermostat = new Thermostat_1.Thermostat();
        var thermostatHistory = new ThermostatHistory_1.ThermostatHistory(thermostat);
        thermostat.setSettings(20, 'Eco'); // Setting temperature to 20 and mode to Eco
        thermostatHistory.save(); // Saving settings...
        thermostat.setSettings(25, 'Heat'); // Setting temperature to 25 and mode to Heat
        thermostatHistory.save(); // Saving settings...
        thermostat.setSettings(18, 'Cool'); // Setting temperature to 18 and mode to Cool
        thermostatHistory.save(); // Saving settings...
        thermostatHistory.undo(); // Settings changed, temperature to 25 as mode to Heat
        thermostatHistory.redo(); // Settings changed, temperature to 18 as mode to Cool
        thermostatHistory.undo(); // Settings changed, temperature to 25 as mode to Heat
        thermostatHistory.undo(); // Settings changed, temperature to 20 as mode to Eco
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
