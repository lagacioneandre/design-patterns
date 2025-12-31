import { PlanoFactory } from "./factories/interface/plano-factory.interface";

// client
export class Streaming {
    private factory: PlanoFactory;

    constructor (factory: PlanoFactory) {
        this.factory = factory;
    }

    play() {
        const player = this.factory.criarVideoPlayer().obterPlayer();
        const legendas = this.factory.criarLegendas().definirLegenda();
        const quality = this.factory.criarQualidadeVideo().definirQualidade();
        console.log(player);
        console.log(legendas);
        console.log(quality);
    }
}