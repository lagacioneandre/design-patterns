import { RelatorioBuilder } from "./RelatorioBuilder";
import { RelatoriDirector } from "./RelatorioDirector";

class Client {
    private director = new RelatoriDirector();

    relatorioExecutivo() {
        console.log("Criação 1: Relatório Executivo");
        const builderExecutivo = new RelatorioBuilder();
        const relatorioExecutivo = this.director.criarExecutivo(builderExecutivo);
        relatorioExecutivo.imprimir();
    }

    relatorioTecnico() {
        console.log("Criação 2: Relatório Técnico");
        const builderTecnico = new RelatorioBuilder();
        const relatorioTecnico = this.director.criarTecnico(builderTecnico);
        relatorioTecnico.imprimir();
    }

    relatorioCustomizado() {
        console.log("Criação 3: Relatório Customizado");
        const relatorioCustom = new RelatorioBuilder()
            .construirHeader('Relatorio customizado', true)
            .construirBody('texto', true)
            .obterRelatorio(); // o rodape fica com o padrao do construtor
        relatorioCustom.imprimir();
    }
}

(function() {
    const client = new Client();
    client.relatorioExecutivo();
    client.relatorioTecnico();
    client.relatorioCustomizado();
})();