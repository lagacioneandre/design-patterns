import { Panel } from "../../interfaces/panel.interface";
import { Seat } from "../../interfaces/seat.interface";
import { Wheels } from "../../interfaces/wheels.interface";

// abstract factory
export interface VehicleAccessories {
    getWheels(): Wheels;
    getSeat(): Seat;
    getPanel(): Panel;
}