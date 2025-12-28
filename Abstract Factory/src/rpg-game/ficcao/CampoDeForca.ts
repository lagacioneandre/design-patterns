import { Habilidade } from "../interfaces/habilidade.interface";

// concrete class
export class CampoDeForca implements Habilidade {
    setHabilidade(): string {
        return 'Campo de forca.';
    }
}