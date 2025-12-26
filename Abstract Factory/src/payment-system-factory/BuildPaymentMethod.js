"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethods = void 0;
// client
var PaymentMethods = /** @class */ (function () {
    function PaymentMethods(factory) {
        this._factory = factory;
        this._cashPayment = this._factory.buildCashPayment();
        this._creditCardPayment = this._factory.buildCreditCardPayment();
    }
    PaymentMethods.prototype.cash = function () {
        return this._cashPayment.print();
    };
    PaymentMethods.prototype.creditCard = function () {
        return this._creditCardPayment.print();
    };
    return PaymentMethods;
}());
exports.PaymentMethods = PaymentMethods;
