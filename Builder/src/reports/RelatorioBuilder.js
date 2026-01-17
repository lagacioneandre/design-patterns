"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioBuilder = void 0;
var Report_1 = require("./Report");
var RelatorioBuilder = /** @class */ (function () {
    function RelatorioBuilder() {
        this._titulo = 'Relatorio padrao';
        this._formato = 'texto';
        this.relatorio = Report_1.Relatorio.criarVazio();
    }
    RelatorioBuilder.prototype.construirHeader = function (titulo, incluirLogo) {
        this.definirTitulo(titulo);
        this.incluirLogo(incluirLogo);
        return this;
    };
    RelatorioBuilder.prototype.construirBody = function (formato, incluirEstatistica) {
        this.definirFormato(formato);
        this.incluirResumosEstatisticos(incluirEstatistica);
        return this;
    };
    RelatorioBuilder.prototype.construirFooter = function (textoRodape, incluirData) {
        this.definirRodape(textoRodape);
        this.incluirDataGeracao(incluirData);
        return this;
    };
    RelatorioBuilder.prototype.definirTitulo = function (titulo) {
        this._titulo = titulo;
        this.relatorio.adicionarParte("Titulo: ".concat(titulo));
    };
    RelatorioBuilder.prototype.incluirLogo = function (status) {
        if (status)
            this.relatorio.adicionarParte("Status: Logo da empresa incluida");
    };
    RelatorioBuilder.prototype.definirFormato = function (formato) {
        this._formato = formato;
        this.relatorio.adicionarParte("Corpo: Formato ".concat(formato.toUpperCase()));
    };
    RelatorioBuilder.prototype.incluirResumosEstatisticos = function (status) {
        if (status)
            this.relatorio.adicionarParte("Corpo: Resumo estatistico incluido.");
    };
    RelatorioBuilder.prototype.definirRodape = function (texto) {
        this.relatorio.adicionarParte("Rodape: ".concat(texto));
    };
    RelatorioBuilder.prototype.incluirDataGeracao = function (status) {
        if (status)
            this.relatorio.adicionarParte("Rodape: Gerado em ".concat(new Date().toLocaleDateString('pt-BR')));
    };
    RelatorioBuilder.prototype.obterRelatorio = function () {
        return this.relatorio;
    };
    return RelatorioBuilder;
}());
exports.RelatorioBuilder = RelatorioBuilder;
