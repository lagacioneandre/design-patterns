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
exports.StripeGateway = void 0;
var PaymentGateway_1 = require("./PaymentGateway");
var StripeProcessor_1 = require("./products/StripeProcessor");
var StripeGateway = /** @class */ (function (_super) {
    __extends(StripeGateway, _super);
    function StripeGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripeGateway.prototype.getProcessor = function () {
        return new StripeProcessor_1.StripeProcessor('apiKey');
    };
    return StripeGateway;
}(PaymentGateway_1.PaymentGateway));
exports.StripeGateway = StripeGateway;
