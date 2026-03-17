"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LegacyPay_1 = require("./LegacyPay");
var LegacyPayAdapter_1 = require("./LegacyPayAdapter");
var Client = /** @class */ (function () {
    // O cliente depende apenas da interface (Abstracao)
    function Client(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    Client.prototype.checout = function (total) {
        console.log('Iniciando checkout...');
        this.paymentProcessor.processPayment(total);
        console.log("Status final: ".concat(this.paymentProcessor.getPaymentStatus()));
    };
    return Client;
}());
(function () {
    // --- Execucao ---
    // 1. Temos o sistema legado
    var oldSystem = new LegacyPay_1.LegacyPay();
    // 2. Criamos o adaptador para o sistema legado
    var adapter = new LegacyPayAdapter_1.LegacyPayAdapter(oldSystem);
    // 3. Passamos o adaptador para o cliente
    // O StoreFront aceita o 'adapter' porque ele implementa 'NewPaymentProcessor'
    var app = new Client(adapter);
    app.checout(150.75);
})();
