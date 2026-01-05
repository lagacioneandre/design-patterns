import { BmwCar } from "../bmw/BmwCar";
import { BmwMotorcycle } from "../bmw/BmwMotorcycle";
import { BmwTruck } from "../bmw/BmwTruck";
import { ICar } from "../interfaces/car.interface";
import { IMotorcycle } from "../interfaces/motorcycle.interface";
import { ITruck } from "../interfaces/truck.interface";
import { IBuildVehicleFactory } from "./interface/build-vehicle-factory.interface";

// concrete factory
export class BmwFactory implements IBuildVehicleFactory {
    buildCar(): ICar {
        return new BmwCar()
    }

    buildMotorcycle(): IMotorcycle {
        return new BmwMotorcycle()
    }

    buildTruck(): ITruck {
        return new BmwTruck()
    }
}