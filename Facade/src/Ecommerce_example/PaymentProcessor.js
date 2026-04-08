"use strict";
// Subsitema 2: Processamento de pagamento
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.prototype.authorize = function (amount) {
        console.log("[Pagamento] Autorizando cobranca de R$ ".concat(amount, "..."));
        return true;
    };
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;
