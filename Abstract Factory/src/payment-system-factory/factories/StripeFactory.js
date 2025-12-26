"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeFactory = void 0;
var StripeCash_1 = require("../stripe/StripeCash");
var StripeCreditCard_1 = require("../stripe/StripeCreditCard");
// concrete factory
var StripeFactory = /** @class */ (function () {
    function StripeFactory() {
    }
    StripeFactory.prototype.buildCashPayment = function () {
        return new StripeCash_1.StripeCash();
    };
    StripeFactory.prototype.buildCreditCardPayment = function () {
        return new StripeCreditCard_1.StripeCreditCard();
    };
    return StripeFactory;
}());
exports.StripeFactory = StripeFactory;
