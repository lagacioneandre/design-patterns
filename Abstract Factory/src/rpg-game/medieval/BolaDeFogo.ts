import { Habilidade } from "../interfaces/habilidade.interface";

// concrete class
export class BolaDeFogo implements Habilidade {
    setHabilidade(): string {
        return 'Bola de fogo.';
    }
}