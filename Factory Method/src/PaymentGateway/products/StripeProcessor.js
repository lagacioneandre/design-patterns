"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeProcessor = void 0;
var StripeProcessor = /** @class */ (function () {
    function StripeProcessor(apiKey) {
        this.apiKey = apiKey;
    }
    StripeProcessor.prototype.authenticate = function () {
        return !!this.apiKey.length;
    };
    StripeProcessor.prototype.executePayment = function (amount) {
        console.log("Stripe: Paying ".concat(amount, "."));
        return true;
    };
    return StripeProcessor;
}());
exports.StripeProcessor = StripeProcessor;
