import { AirConditionerCommand } from "./commands/AirConditionerCommand";
import { LightCommand } from "./commands/LightCommand";
import { SecuritySystemCommand } from "./commands/SecuritySystemCommand";
import { HomeRoutine } from "./HomeRoutine";
import { AirConditionerOverheatReceiver } from "./receivers/AirConditionerOverheatReceiver";
import { AirConditionerReceiver } from "./receivers/AirConditionerReceiver";
import { BrokenLightReceiver } from "./receivers/BrokenLightReceiver";
import { LightReceiver } from "./receivers/LightReceiver";
import { SecuritySystemReceiver } from "./receivers/SecuritySystemReceiver";
import { SmartRemote } from "./SmartRemote";

export class Client {
    leave() {
        const lightReceiver = new LightReceiver();
        const airConditionerReceiver = new AirConditionerReceiver();
        const securitySystemnReceiver = new SecuritySystemReceiver();
        
        const turnLightsOn = new LightCommand(lightReceiver, false);
        const powerAirConditionerOn = new AirConditionerCommand(airConditionerReceiver, false);
        const lockAllDors = new SecuritySystemCommand(securitySystemnReceiver, false);

        const homeRoutine = new HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);

        const remoteControl = new SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // Turning lights on!
        // Powering air conditioner on!
        // Locking all dors!

        const timeout = setTimeout(() => {
            remoteControl.pressUndo();
            // Turning lights off!
            // Powering air conditioner off!
            // Unlocking all dors!
            clearTimeout(timeout);
        }, 5000);
    }

    arrive() {
        const lightReceiver = new LightReceiver();
        const airConditionerReceiver = new AirConditionerReceiver();
        const securitySystemnReceiver = new SecuritySystemReceiver();
        
        const turnLightsOn = new LightCommand(lightReceiver, true);
        const powerAirConditionerOn = new AirConditionerCommand(airConditionerReceiver, true);
        const lockAllDors = new SecuritySystemCommand(securitySystemnReceiver, true);

        const homeRoutine = new HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);

        const remoteControl = new SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // Turning lights off!
        // Powering air conditioner off!
        // Unlocking all dors!

        const timeout = setTimeout(() => {
            remoteControl.pressUndo();
            // Turning lights on!
            // Powering air conditioner on!
            // Locking all dors!
            clearTimeout(timeout);
        },5000);
    }

    lightException() {
        const lightReceiver = new BrokenLightReceiver();
        const airConditionerReceiver = new AirConditionerReceiver();
        const securitySystemnReceiver = new SecuritySystemReceiver();
        
        const turnLightsOn = new LightCommand(lightReceiver, false);
        const powerAirConditionerOn = new AirConditionerCommand(airConditionerReceiver, false);
        const lockAllDors = new SecuritySystemCommand(securitySystemnReceiver, false);

        const homeRoutine = new HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);

        const remoteControl = new SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // ERROR: Light bulb is burnt out! Cannot turn off.!

        const timeout = setTimeout(() => {
            remoteControl.pressUndo();
            // No commands to undo!
        },5000);
        clearTimeout(timeout);
    }

    AirConditionertException() {
        const lightReceiver = new LightReceiver();
        const airConditionerReceiver = new AirConditionerOverheatReceiver();
        const securitySystemnReceiver = new SecuritySystemReceiver();
        
        const turnLightsOn = new LightCommand(lightReceiver, false);
        const powerAirConditionerOn = new AirConditionerCommand(airConditionerReceiver, false);
        const lockAllDors = new SecuritySystemCommand(securitySystemnReceiver, false);

        const homeRoutine = new HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);

        const remoteControl = new SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // Turning lights off!
        // ERROR: Hardware Overheat!
        // Turning lights on!

        const timeout = setTimeout(() => {
            remoteControl.pressUndo();
            // No commands to undo!
        },5000);
        clearTimeout(timeout);
    }
}

(function() {
    const client = new Client();
    client.leave();
    client.arrive();
    client.lightException();
    client.AirConditionertException();
})();