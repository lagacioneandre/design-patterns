import { ICommand } from './command.interface';
import { Operation } from './Operation';

export class AdditionCommand implements ICommand {
    private receiver: Operation;
    private value: number;

    constructor (receiver: Operation, value: number) {
        this.receiver = receiver;
        this.value = value;
    }

    execute(): void {
        this.receiver.toAdd(this.value);
    }

    undo(): void {
        this.receiver.toSubtract(this.value);
    }
}