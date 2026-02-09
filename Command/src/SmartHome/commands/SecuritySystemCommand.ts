import { ICommand } from "../command.interface";
import { SecuritySystemReceiver } from "../receivers/SecuritySystemReceiver";

export class SecuritySystemCommand implements ICommand {
    private previousState!: boolean;
    private receiver: SecuritySystemReceiver;
    private lockThenAll: boolean;

    constructor (receiver: SecuritySystemReceiver, lockThenAll: boolean) {
        this.receiver = receiver;
        this.lockThenAll = lockThenAll;
    }

    execute(): boolean {
        this.previousState = this.receiver.currentState;
        if (this.lockThenAll) {
            return this.receiver.lockAll();
        }
        return this.receiver.unlockAll();;
    }

    undo(): void {
        if (this.previousState) {
            this.receiver.unlockAll();
        } else {
            this.receiver.lockAll();
        }
    }
}