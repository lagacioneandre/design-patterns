import { ICommand } from "./command.interface";
import { ICoordinates } from "./coordinates.interface";
import { Robot } from "./Robot";

export class MoveToEast implements ICommand {
    private receiver: Robot;
    private lastPosition: ICoordinates;

    constructor (receiver: Robot) {
        this.receiver = receiver;
        this.lastPosition = receiver.currentPosition();
    }

    execute(): void {
        this.lastPosition = this.receiver.currentPosition();
        const nextPosition = {
            x: this.lastPosition.x + 1,
            y: this.lastPosition.y,
        }
        this.receiver.moveTo(nextPosition.x, nextPosition.y);
    }

    undo(): void {
        this.receiver.moveTo(this.lastPosition?.x, this.lastPosition?.y);
    }
}