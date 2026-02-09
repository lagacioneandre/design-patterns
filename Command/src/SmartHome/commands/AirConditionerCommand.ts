import { ICommand } from "../command.interface";
import { AirConditionerReceiver } from "../receivers/AirConditionerReceiver";

export class AirConditionerCommand implements ICommand {
    private previousState!: boolean;
    private receiver: AirConditionerReceiver;
    private powerItOn: boolean;

    constructor (receiver: AirConditionerReceiver, powerItOn: boolean) {
        this.receiver = receiver;
        this.powerItOn = powerItOn;
    }

    execute(): boolean {
        this.previousState = this.receiver.currentState;
        if (this.powerItOn) {
            return this.receiver.powerOn();
        }
        return this.receiver.powerOff();
    }

    undo(): void {
        if (this.previousState) {
            this.receiver.powerOff();
        } else {
            this.receiver.powerOn();
        }
    }
}