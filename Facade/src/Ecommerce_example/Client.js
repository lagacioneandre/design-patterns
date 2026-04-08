"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderFacade_1 = require("./OrderFacade");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        console.log('VACAAA');
        // O cliente so conhece a Fachada
        var storeFacade = new OrderFacade_1.OrderFacade();
        // O processo complexo vira uma unica linha de codigo
        var success = storeFacade.finalizeOrder('PS5-CONSOLE-01', 4500, '01001-000');
        if (success) {
            console.log('Interface: Parabens pela compra');
        }
        else {
            console.log('Interface: Ops, algo deu errado com seu pedido.');
        }
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
