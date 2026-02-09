import { ICommand } from "../command.interface";
import { LightReceiver } from "../receivers/LightReceiver";

export class LightCommand implements ICommand {
    private previousState!: boolean;
    private receiver: LightReceiver;
    private turnItOn: boolean;

    constructor (recevier: LightReceiver, turnItOn: boolean) {
        this.receiver = recevier;
        this.turnItOn = turnItOn;
    }

    execute(): boolean {
        this.previousState = this.receiver.currentState;
        if (this.turnItOn) {
            return this.receiver.turnOn();
        }
        return this.receiver.turnOff();;
    }

    undo(): void {
        if (this.previousState) {
            this.receiver.turnOff();
        } else {
            this.receiver.turnOn();
        }
    }
}