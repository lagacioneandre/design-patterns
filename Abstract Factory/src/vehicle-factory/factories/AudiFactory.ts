import { AudiCar } from "../audi/AudiCar";
import { AudiMotorcycle } from "../audi/AudiMotorcycle";
import { AudiTruck } from "../audi/AudiTruck";
import { ICar } from "../interfaces/car.interface";
import { IMotorcycle } from "../interfaces/motorcycle.interface";
import { ITruck } from "../interfaces/truck.interface";
import { IBuildVehicleFactory } from "./interface/build-vehicle-factory.interface";

// concrete factory
export class AudiFactory implements IBuildVehicleFactory {
    buildCar(): ICar {
        return new AudiCar()
    }

    buildMotorcycle(): IMotorcycle {
        return new AudiMotorcycle()
    }

    buildTruck(): ITruck {
        return new AudiTruck()
    }
}