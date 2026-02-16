"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalProcessor = void 0;
var PayPalProcessor = /** @class */ (function () {
    function PayPalProcessor(user, password) {
        this.user = user;
        this.password = password;
    }
    PayPalProcessor.prototype.authenticate = function () {
        return !!this.user.length && !!this.password.length;
    };
    PayPalProcessor.prototype.executePayment = function (amount) {
        console.log("Paypal: Paying ".concat(amount, "."));
        return true;
    };
    return PayPalProcessor;
}());
exports.PayPalProcessor = PayPalProcessor;
