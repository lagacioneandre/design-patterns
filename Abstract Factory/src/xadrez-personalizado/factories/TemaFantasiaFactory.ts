import { Pecas } from "../interfaces/pecas.interface";
import { Tabuleiro } from "../interfaces/tabuleiro.interface";
import { TemaFantasiaPecas } from "../tema-fantasia/TemaFantasiaPecas";
import { TemaFantasiaTabuleiro } from "../tema-fantasia/TemaFantasiaTabuleiro";
import { JogoXadrez } from "./interface/jogo-xadrez.interface";

// concrete class
export class TemaFantasiaFacotry implements JogoXadrez {
    definirPecas(): Pecas {
        return new TemaFantasiaPecas();
    }

    definirTabuleiro(): Tabuleiro {
        return new TemaFantasiaTabuleiro();
    }
}