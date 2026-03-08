"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SharedResources_1 = require("./SharedResources");
var Starship_1 = require("./Starship");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var sharedResources = new SharedResources_1.SharedResources('Manual completo', 123);
        var prototype = new Starship_1.Starship('Prototipo cargueiro', 100, sharedResources);
        prototype.display(); //Identificador: Prototipo cargueiro, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 123
        var nave1 = prototype.clone();
        var nave2 = prototype.clone();
        nave1.identificador = 'Nave-01';
        nave1.display(); //Identificador: Nave-01, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 123
        nave2.identificador = 'Nave-02';
        nave2.display(); //Identificador: Nave-02, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 123
        nave1.recursos.codigoSegranca = 456;
        prototype.display(); //Identificador: Prototipo cargueiro, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 456
        nave1.display(); //Identificador: Nave-01, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 456
        nave2.display(); //Identificador: Nave-02 cargueiro, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 456
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
