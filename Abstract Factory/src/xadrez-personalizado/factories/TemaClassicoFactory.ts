import { Pecas } from "../interfaces/pecas.interface";
import { Tabuleiro } from "../interfaces/tabuleiro.interface";
import { TemaClassicoPecas } from "../tema-classico/TemaClassicoPecas";
import { TemaClassicoTabuleiro } from "../tema-classico/TemaClassicoTabuleiro";
import { JogoXadrez } from "./interface/jogo-xadrez.interface";

// concrete factory
export class TemaClassicoFactory implements JogoXadrez {
    definirPecas(): Pecas {
        return new TemaClassicoPecas();
    }

    definirTabuleiro(): Tabuleiro {
        return new TemaClassicoTabuleiro();
    }
}