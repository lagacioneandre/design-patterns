import { ICar } from "../../interfaces/car.interface";
import { IMotorcycle } from "../../interfaces/motorcycle.interface";
import { ITruck } from "../../interfaces/truck.interface";

// abstract factory
export interface IBuildVehicleFactory {
    buildCar(): ICar;
    buildMotorcycle(): IMotorcycle;
    buildTruck(): ITruck;
}