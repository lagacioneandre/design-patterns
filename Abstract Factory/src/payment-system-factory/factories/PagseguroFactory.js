"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagseguroFactory = void 0;
var PagseguroCash_1 = require("../pagseguro/PagseguroCash");
var PagseguroCreditCard_1 = require("../pagseguro/PagseguroCreditCard");
// concrete facroty
var PagseguroFactory = /** @class */ (function () {
    function PagseguroFactory() {
    }
    PagseguroFactory.prototype.buildCashPayment = function () {
        return new PagseguroCash_1.PagseguroCash();
    };
    PagseguroFactory.prototype.buildCreditCardPayment = function () {
        return new PagseguroCreditCard_1.PagseguroCreditCard();
    };
    return PagseguroFactory;
}());
exports.PagseguroFactory = PagseguroFactory;
