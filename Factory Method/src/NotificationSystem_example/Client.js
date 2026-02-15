"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailFactory_1 = require("./EmailFactory");
var SMSFactory_1 = require("./SMSFactory");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.appCode = function (factory) {
        factory.notify('Ola, este e um teste do factory method.');
    };
    return Client;
}());
(function () {
    var client = new Client();
    console.log('App: Rodando com email...');
    client.appCode(new EmailFactory_1.EmailFactory());
    console.log('\nApp: Rodando com SMS...');
    client.appCode(new SMSFactory_1.SMSFactory());
})();
