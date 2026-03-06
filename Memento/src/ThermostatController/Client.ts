import { Thermostat } from "./Thermostat";
import { ThermostatHistory } from "./ThermostatHistory";

class Client {
    execute() {
        const thermostat = new Thermostat();
        const thermostatHistory = new ThermostatHistory(thermostat);

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
    }
}

(() => {
    new Client().execute();
})();