"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoPorPix = void 0;
// concrete class
var PagamentoPorPix = /** @class */ (function () {
    function PagamentoPorPix() {
    }
    PagamentoPorPix.prototype.processar = function (valor) {
        return "Processando o pagamento de R$".concat(valor, " com PIX. Transferencia instantanea.");
    };
    return PagamentoPorPix;
}());
exports.PagamentoPorPix = PagamentoPorPix;
