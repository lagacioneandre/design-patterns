import { IChair } from "../interfaces/chair.interface";

// classe concreta
export class ModernChair implements IChair {
    color(): string {
        return 'Azul';
    }

    material(): string {
        return 'Metal';
    }
}