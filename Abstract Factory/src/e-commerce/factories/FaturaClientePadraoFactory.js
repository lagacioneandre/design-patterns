"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaturaClientePadraoFactory = void 0;
var FaturaSimples_1 = require("../cliente-padrao/FaturaSimples");
var PagamentoPorCartao_1 = require("../cliente-padrao/PagamentoPorCartao");
// concrete factory
var FaturaClientePadraoFactory = /** @class */ (function () {
    function FaturaClientePadraoFactory() {
    }
    FaturaClientePadraoFactory.prototype.criarFatura = function () {
        return new FaturaSimples_1.FaturaSimples();
    };
    FaturaClientePadraoFactory.prototype.criarMetodoPagament = function () {
        return new PagamentoPorCartao_1.PagamentoPorCartao();
    };
    return FaturaClientePadraoFactory;
}());
exports.FaturaClientePadraoFactory = FaturaClientePadraoFactory;
