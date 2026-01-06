"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaClassicoFactory = void 0;
var TemaClassicoPecas_1 = require("../tema-classico/TemaClassicoPecas");
var TemaClassicoTabuleiro_1 = require("../tema-classico/TemaClassicoTabuleiro");
// concrete factory
var TemaClassicoFactory = /** @class */ (function () {
    function TemaClassicoFactory() {
    }
    TemaClassicoFactory.prototype.definirPecas = function () {
        return new TemaClassicoPecas_1.TemaClassicoPecas();
    };
    TemaClassicoFactory.prototype.definirTabuleiro = function () {
        return new TemaClassicoTabuleiro_1.TemaClassicoTabuleiro();
    };
    return TemaClassicoFactory;
}());
exports.TemaClassicoFactory = TemaClassicoFactory;
