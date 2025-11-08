import { Wheels } from "../interfaces/wheels.interface";

// concrete class
export class ChromeWheels implements Wheels {
    type(): string {
        return 'Chrome wheels type.'
    }
}