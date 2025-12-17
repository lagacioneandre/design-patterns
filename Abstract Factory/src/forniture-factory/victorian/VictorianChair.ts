import { IChair } from "../interfaces/chair.interface";

// classe concreta
export class VictorianChair implements IChair {
    color(): string {
        return 'Pardo';
    }

    material(): string {
        return 'Plastico';
    }
}