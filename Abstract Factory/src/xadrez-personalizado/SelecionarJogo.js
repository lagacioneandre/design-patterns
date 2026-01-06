"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelecionarJogo = void 0;
// client
var SelecionarJogo = /** @class */ (function () {
    function SelecionarJogo(factory) {
        this.factroy = factory;
    }
    SelecionarJogo.prototype.render = function () {
        var pecas = this.factroy.definirPecas().tipo();
        var tabuleiro = this.factroy.definirTabuleiro().tipo();
        console.log(pecas);
        console.log(tabuleiro);
    };
    return SelecionarJogo;
}());
exports.SelecionarJogo = SelecionarJogo;
