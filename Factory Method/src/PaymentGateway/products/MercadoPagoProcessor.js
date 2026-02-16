"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoProcessor = void 0;
var MercadoPagoProcessor = /** @class */ (function () {
    function MercadoPagoProcessor(token) {
        this.token = token;
    }
    MercadoPagoProcessor.prototype.authenticate = function () {
        return !!this.token.length;
    };
    MercadoPagoProcessor.prototype.executePayment = function (amount) {
        console.log("Mercado Pago: Paying ".concat(amount, "."));
        return true;
    };
    return MercadoPagoProcessor;
}());
exports.MercadoPagoProcessor = MercadoPagoProcessor;
