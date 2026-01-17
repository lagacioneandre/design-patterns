"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RelatorioBuilder_1 = require("./RelatorioBuilder");
var RelatorioDirector_1 = require("./RelatorioDirector");
var Client = /** @class */ (function () {
    function Client() {
        this.director = new RelatorioDirector_1.RelatoriDirector();
    }
    Client.prototype.relatorioExecutivo = function () {
        console.log("Criação 1: Relatório Executivo");
        var builderExecutivo = new RelatorioBuilder_1.RelatorioBuilder();
        var relatorioExecutivo = this.director.criarExecutivo(builderExecutivo);
        relatorioExecutivo.imprimir();
    };
    Client.prototype.relatorioTecnico = function () {
        console.log("Criação 2: Relatório Técnico");
        var builderTecnico = new RelatorioBuilder_1.RelatorioBuilder();
        var relatorioTecnico = this.director.criarTecnico(builderTecnico);
        relatorioTecnico.imprimir();
    };
    Client.prototype.relatorioCustomizado = function () {
        console.log("Criação 3: Relatório Customizado");
        var relatorioCustom = new RelatorioBuilder_1.RelatorioBuilder()
            .construirHeader('Relatorio customizado', true)
            .construirBody('texto', true)
            .obterRelatorio(); // o rodape fica com o padrao do construtor
        relatorioCustom.imprimir();
    };
    return Client;
}());
(function () {
    var client = new Client();
    client.relatorioExecutivo();
    client.relatorioTecnico();
    client.relatorioCustomizado();
})();
