import { IChair } from "../interfaces/chair.interface";

// classe concreta
export class ArtdecoChair implements IChair {
    color(): string {
        return 'Verde';
    }

    material(): string {
        return 'Madeira';
    }
}