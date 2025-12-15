import { ISofa } from "../interfaces/sofa.interface";

// classe concreta
export class ArtdecoSofa implements ISofa {
    color(): string {
        return 'Roxo';
    }

    size(): string {
        return '2 lugares';
    }
}