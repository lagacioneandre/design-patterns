"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGateway = void 0;
var PaymentGateway = /** @class */ (function () {
    function PaymentGateway() {
    }
    PaymentGateway.prototype.validateAmount = function (amount) {
        if (amount < 1) {
            throw new Error('Amount needs to be higher than zero.');
        }
    };
    PaymentGateway.prototype.executePayment = function (amount) {
        this.validateAmount(amount);
        var processor = this.getProcessor();
        var authentication = processor.authenticate();
        if (!authentication)
            throw new Error('Authentication failed.');
        processor.executePayment(amount);
        console.log("Payment of ".concat(amount, " executed."));
    };
    return PaymentGateway;
}());
exports.PaymentGateway = PaymentGateway;
