"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalGateway = void 0;
var PaymentGateway_1 = require("./PaymentGateway");
var PayPalProcessor_1 = require("./products/PayPalProcessor");
var PayPalGateway = /** @class */ (function (_super) {
    __extends(PayPalGateway, _super);
    function PayPalGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPalGateway.prototype.getProcessor = function () {
        return new PayPalProcessor_1.PayPalProcessor('user', 'password');
    };
    return PayPalGateway;
}(PaymentGateway_1.PaymentGateway));
exports.PayPalGateway = PayPalGateway;
