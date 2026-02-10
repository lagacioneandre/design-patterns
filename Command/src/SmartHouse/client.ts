import { LightOffCommand } from "./LightOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { RemoteControl } from "./RemoteControl";
import { SmartHouse } from "./SmartHouse";
import { ThermostatUpCommand } from "./ThermostatUpCommand";
import { ThermostatDownCommand } from "./ThernostatDownCommand";

function client() {
    const receiver = new SmartHouse();
    const turnsLightOnCommand = new LightOnCommand(receiver);
    const turnsLightOffCommand = new LightOffCommand(receiver);
    const thermostatUpTemperatureCommand = new ThermostatUpCommand(receiver);
    const thermostatDownTemperatureCommand = new ThermostatDownCommand(receiver);

    // turns light on
    const remoteControl1 = new RemoteControl(turnsLightOnCommand);
    remoteControl1.pressButton();

    // turns light off
    const remoteControl2 = new RemoteControl(turnsLightOffCommand);
    remoteControl2.pressButton();

    // increase the temperature
    const remoteControl3 = new RemoteControl(thermostatUpTemperatureCommand);
    remoteControl3.pressButton();

    // decrease temperature
    const remoteControl4 = new RemoteControl(thermostatDownTemperatureCommand);
    remoteControl4.pressButton();
}

client();
