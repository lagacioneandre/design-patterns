import { Tabuleiro } from "../interfaces/tabuleiro.interface";

// concrete class
export class TemaClassicoTabuleiro implements Tabuleiro {
    tipo(): string {
        return 'Tabuleiro simples.';
    }
}