"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MercadoPagoGateway_1 = require("./MercadoPagoGateway");
var PayPalGateway_1 = require("./PayPalGateway");
var PayPalGatewayWithoutAuthentication_1 = require("./PayPalGatewayWithoutAuthentication");
var StripeGateway_1 = require("./StripeGateway");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function (factory, amount) {
        try {
            console.log("Payment process started: Total amount ".concat(amount));
            factory.executePayment(amount);
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Client;
}());
(function () {
    var client = new Client();
    var stripeGateway = new StripeGateway_1.StripeGateway();
    var payPalGateway = new PayPalGateway_1.PayPalGateway();
    var mercadoPagoGateway = new MercadoPagoGateway_1.MercadoPagoGateway();
    client.execute(stripeGateway, 100);
    client.execute(payPalGateway, 200);
    client.execute(mercadoPagoGateway, 300);
    // should throw error because the amount is zero
    client.execute(stripeGateway, 0);
    // should throw authentication error
    var payPalGatewayWithoutAuthentication = new PayPalGatewayWithoutAuthentication_1.PayPalGatewayWithoutAuthentication();
    client.execute(payPalGatewayWithoutAuthentication, 100);
})();
