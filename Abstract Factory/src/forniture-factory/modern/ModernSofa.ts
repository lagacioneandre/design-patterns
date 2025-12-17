import { ISofa } from "../interfaces/sofa.interface";

// classe concreta
export class ModernSofa implements ISofa {
    color(): string {
        return 'Azul';
    }

    size(): string {
        return '3 lugares';
    }
}