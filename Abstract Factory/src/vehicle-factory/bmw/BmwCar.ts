import { ICar } from "../interfaces/car.interface";

// concrete class
export class BmwCar implements ICar {
    color(color: string): string {
        return `O cor do carro e ${color}`;
    }

    numberOfPorts(ports: number): string {
        return `O numero de portas e ${ports}`
    }

    engineModel(engine: string): string {
        return `O motor e ${engine}`
    }
}