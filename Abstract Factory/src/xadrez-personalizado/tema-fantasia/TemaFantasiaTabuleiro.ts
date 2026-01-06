import { Tabuleiro } from "../interfaces/tabuleiro.interface";

// concrete class
export class TemaFantasiaTabuleiro implements Tabuleiro {
    tipo(): string {
        return 'Tabuleiro mistico.'
    }
}