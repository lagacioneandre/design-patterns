"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatoriDirector = void 0;
var RelatoriDirector = /** @class */ (function () {
    function RelatoriDirector() {
    }
    RelatoriDirector.prototype.criarExecutivo = function (builder) {
        return builder
            .construirHeader('Relatorio executivo - Visao geral', true)
            .construirBody('texto', false)
            .construirFooter('Confidencial - nao distribuir', true)
            .obterRelatorio();
    };
    RelatoriDirector.prototype.criarTecnico = function (builder) {
        return builder
            .construirHeader('Relatorio tecnico - Dados brutos', false)
            .construirBody('tabela', true)
            .construirFooter('Uso interno', false)
            .obterRelatorio();
    };
    return RelatoriDirector;
}());
exports.RelatoriDirector = RelatoriDirector;
