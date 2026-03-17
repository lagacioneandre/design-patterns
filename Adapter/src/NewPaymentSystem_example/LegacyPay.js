"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyPay = void 0;
// Adaptee
var LegacyPay = /** @class */ (function () {
    function LegacyPay() {
    }
    // O sistema antigo trabalha com centavos (inteiro) e nao com reais (decimal)
    LegacyPay.prototype.executeTrade = function (amountInCents) {
        console.log("LegacyPay: Processando transacao de ".concat(amountInCents, " centavos."));
    };
    LegacyPay.prototype.checkStatus = function () {
        // Retorna um booleano, mas nosso sistema espera uma string descritiva
        return true;
    };
    return LegacyPay;
}());
exports.LegacyPay = LegacyPay;
