import { Command } from "./command.interface";
import { SmartHouse } from "./SmartHouse";

export class ThermostatUpCommand implements Command {
    private receiver: SmartHouse;

    constructor (receiver: SmartHouse) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.changeTemperature(1);
    }
}