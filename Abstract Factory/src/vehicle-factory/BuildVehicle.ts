import { IBuildVehicleFactory } from "./factories/interface/build-vehicle-factory.interface";
import { ICar } from "./interfaces/car.interface";
import { IMotorcycle } from "./interfaces/motorcycle.interface";
import { ITruck } from "./interfaces/truck.interface";


/**
 * client
 */
export class BuildVehicle {
    private _factory: IBuildVehicleFactory
    private _car: ICar
    private _motorcycle: IMotorcycle
    private _truck: ITruck

    constructor (factory: IBuildVehicleFactory) {
        this._factory = factory;
        this._car = this._factory.buildCar();
        this._motorcycle = this._factory.buildMotorcycle();
        this._truck = this._factory.buildTruck();
    }

    setCarProperties(color: string, numberOfPorts: number, engineModel: string): string {
        return `
            ${this._car.color(color)}, 
            ${this._car.numberOfPorts(numberOfPorts)}, 
            ${this._car.engineModel(engineModel)}
        `
    }

    setMotorcycleProperties(color: string, cubicCapacity: number, fuelCapacity: number): string {
        return `
            ${this._motorcycle.color(color)}, 
            ${this._motorcycle.cubicCapacity(cubicCapacity)}, 
            ${this._motorcycle.fuelCapacity(fuelCapacity)}
        `
    }

    setTruckProperties(color: string, numberOfWheels: number, enginePowder: string): string {
        return `
            ${this._truck.color(color)}, 
            ${this._truck.numberOfWheels(numberOfWheels)}, 
            ${this._truck.enginePowder(enginePowder)}
        `
    }
}