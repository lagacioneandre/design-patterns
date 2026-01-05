import { HondaCar } from "../honda/HondaCar";
import { HondaMotorcycle } from "../honda/HondaMotorcycle";
import { HondaTruck } from "../honda/HondaTruck";
import { ICar } from "../interfaces/car.interface";
import { IMotorcycle } from "../interfaces/motorcycle.interface";
import { ITruck } from "../interfaces/truck.interface";
import { IBuildVehicleFactory } from "./interface/build-vehicle-factory.interface";

// concrete factory
export class HondaFactory implements IBuildVehicleFactory {
    buildCar(): ICar {
        return new HondaCar()
    }

    buildMotorcycle(): IMotorcycle {
        return new HondaMotorcycle()
    }

    buildTruck(): ITruck {
        return new HondaTruck()
    }
}