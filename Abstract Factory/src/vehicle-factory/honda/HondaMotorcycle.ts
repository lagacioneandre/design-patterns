import { IMotorcycle } from "../interfaces/motorcycle.interface";

// concrete class
export class HondaMotorcycle implements IMotorcycle {
    color(color: string): string {
        return `O cor da moto e ${color}`
    }

    cubicCapacity(cc: number): string {
        return `As cilindradas sao ${cc}`
    }

    fuelCapacity(fuelCapacity: number): string {
        return `A capacidade de combustivel e ${fuelCapacity}`
    }
}