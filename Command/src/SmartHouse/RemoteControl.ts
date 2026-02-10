import { Command } from "./command.interface";

export class RemoteControl {
    private command: Command;

    constructor (command: Command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}