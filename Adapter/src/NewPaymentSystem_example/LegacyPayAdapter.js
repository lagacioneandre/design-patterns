"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyPayAdapter = void 0;
// Adapter
var LegacyPayAdapter = /** @class */ (function () {
    function LegacyPayAdapter(legacePay) {
        this.legacePay = legacePay;
    }
    LegacyPayAdapter.prototype.processPayment = function (amount) {
        // Traducao 1: Converter Reais (float) para centavos (int)
        var cents = Math.round(amount * 100);
        // Traducao 2: Chamar o metodo com nome diferente
        this.legacePay.executeTrade(cents);
    };
    LegacyPayAdapter.prototype.getPaymentStatus = function () {
        // Traducao 3: Converter o booleano para a string esperada pelo sistema novo
        var isActive = this.legacePay.checkStatus();
        return isActive ? 'CONCLUIDO_COM_SUCESSO' : 'ERRO_NA_TRANSACAO';
    };
    return LegacyPayAdapter;
}());
exports.LegacyPayAdapter = LegacyPayAdapter;
