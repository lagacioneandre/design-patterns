import { Command } from "./command.interface";
import { SmartHouse } from "./SmartHouse";

export class LightOffCommand implements Command {
    private receiver: SmartHouse;

    constructor (receiver: SmartHouse) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.toggleLight(false);
    }
}