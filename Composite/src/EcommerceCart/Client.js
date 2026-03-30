"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("./Box");
var Product_1 = require("./Product");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var iphone = new Product_1.Prodcut('iPhone', 5000, 0.5);
        var capaCelular = new Product_1.Prodcut('Capa de celular', 100, 0.1);
        var carregador = new Product_1.Prodcut('Carregador', 200, 0.1);
        var comboSmartPhone = new Box_1.Box();
        comboSmartPhone.add(iphone);
        comboSmartPhone.add(capaCelular);
        comboSmartPhone.add(carregador);
        var notebook = new Product_1.Prodcut('Notebook', 8000, 2);
        var carrinho = new Box_1.Box();
        carrinho.add(comboSmartPhone);
        carrinho.add(notebook);
        console.log("O preco do combo smartphone e R$".concat(comboSmartPhone.getPrice(), " e o seu peso e ").concat(comboSmartPhone.getWeight()));
        console.log("O preco total do carrinho e de R$".concat(carrinho.getPrice(), " e o peso total e de ").concat(carrinho.getWeight()));
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
