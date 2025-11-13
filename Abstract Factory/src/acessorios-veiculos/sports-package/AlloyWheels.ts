import { Wheels } from "../interfaces/wheels.interface";

// concrete class
export class AlloyWheels implements Wheels {
    type(): string {
        return 'Alloy wheels type.';
    }
}