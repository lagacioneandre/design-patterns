"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationManager_1 = require("./ConfigurationManager");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // Note que aqui nao chamamos 'new'
        // A instancia ja existe na memoria antes mesmo desta linha ser executada
        var config = ConfigurationManager_1.ConfigurationManager.getInstance();
        console.log(config.getSetting('appName')); // Saida: Sistema Galactico
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
