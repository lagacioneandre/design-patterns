import { Pecas } from "../../interfaces/pecas.interface";
import { Tabuleiro } from "../../interfaces/tabuleiro.interface";

// abstract factory
export interface JogoXadrez {
    definirPecas(): Pecas;
    definirTabuleiro(): Tabuleiro;
}