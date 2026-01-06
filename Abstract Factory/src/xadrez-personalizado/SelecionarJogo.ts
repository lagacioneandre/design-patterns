import { JogoXadrez } from "./factories/interface/jogo-xadrez.interface";

// client
export class SelecionarJogo {
    private factroy: JogoXadrez;

    constructor(factory: JogoXadrez) {
        this.factroy = factory;
    }

    render() {
        const pecas = this.factroy.definirPecas().tipo();
        const tabuleiro = this.factroy.definirTabuleiro().tipo();
        console.log(pecas);
        console.log(tabuleiro);
    }
}