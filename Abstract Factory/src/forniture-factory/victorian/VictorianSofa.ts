import { ISofa } from "../interfaces/sofa.interface";

// classe concreta
export class VictorianSofa implements ISofa {
    color(): string {
        return 'Pink';
    }

    size(): string {
        return '1 lugare';
    }
}