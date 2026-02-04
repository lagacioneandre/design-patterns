import { ICoordinates } from "./coordinates.interface";

export class Robot {
    private coordinates: ICoordinates = {
        x: 0,
        y: 0,
    };

    moveTo(deltaX: number, deltaY: number) {
        console.log(`Moving to new position, X: ${deltaX} and Y: ${deltaY}`);
        this.coordinates = {
            x: deltaX,
            y: deltaY
        };
    }

    currentPosition() {
        return this.coordinates;
    }
}