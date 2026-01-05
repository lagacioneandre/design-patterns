import { ITruck } from "../interfaces/truck.interface";

// concrete class
export class BmwTruck implements ITruck {
    color(color: string): string {
        return `A cor do caminhao e ${color}`
    }

    numberOfWheels(wheels: number): string {
        return `A quantidade de rodas e ${wheels}`
    }

    enginePowder(powder: string): string {
        return `A forca do motor e ${powder}`
    }
}