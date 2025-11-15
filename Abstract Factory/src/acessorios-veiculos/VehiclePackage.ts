import { VehicleAccessories } from "./factories/interface/vehicle-accessories";
import { Panel } from "./interfaces/panel.interface";
import { Seat } from "./interfaces/seat.interface";
import { Wheels } from "./interfaces/wheels.interface";

// client
export class VehiclePackage {
    private wheels: Wheels;
    private seat: Seat;
    private panel: Panel;

    constructor (factory: VehicleAccessories) {
        this.wheels = factory.getWheels();
        this.seat = factory.getSeat();
        this.panel = factory.getPanel();
    }

    buildPackage() {
        console.log(`Wheels type: ${this.wheels.type()}`);
        console.log(`Seat: ${this.seat.description()}`);
        console.log(`Panel configuration: ${this.panel.configuration()}`);
    }
}