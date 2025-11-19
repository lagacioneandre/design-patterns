"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoPorCartao = void 0;
// concrete class
var PagamentoPorCartao = /** @class */ (function () {
    function PagamentoPorCartao() {
    }
    PagamentoPorCartao.prototype.processar = function (valor) {
        return "Processando o valor de R$".concat(valor, " com cartao de credito.");
    };
    return PagamentoPorCartao;
}());
exports.PagamentoPorCartao = PagamentoPorCartao;
