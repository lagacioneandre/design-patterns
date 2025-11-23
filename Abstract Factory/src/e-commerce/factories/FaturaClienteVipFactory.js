"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaturaClienteVipFactory = void 0;
var FaturaDetalhada_1 = require("../cliente-vip/FaturaDetalhada");
var PagamentoPorPix_1 = require("../cliente-vip/PagamentoPorPix");
// concrete factory
var FaturaClienteVipFactory = /** @class */ (function () {
    function FaturaClienteVipFactory() {
    }
    FaturaClienteVipFactory.prototype.criarFatura = function () {
        return new FaturaDetalhada_1.FaturaDetalhada();
    };
    FaturaClienteVipFactory.prototype.criarMetodoPagament = function () {
        return new PagamentoPorPix_1.PagamentoPorPix();
    };
    return FaturaClienteVipFactory;
}());
exports.FaturaClienteVipFactory = FaturaClienteVipFactory;
