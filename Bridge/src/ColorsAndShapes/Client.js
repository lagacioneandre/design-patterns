"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlueColor_1 = require("./BlueColor");
var Circle_1 = require("./Circle");
var GreenColor_1 = require("./GreenColor");
var RedColor_1 = require("./RedColor");
var Square_1 = require("./Square");
var Triangle_1 = require("./Triangle");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // Criamos as implementacoes
        var red = new RedColor_1.RedColor();
        var blue = new BlueColor_1.BlueColor();
        // criamos as abstracoes passando a implementacao desejada via "Ponte"
        var redCircle = new Circle_1.Circle(red, 10);
        var blueSquare = new Square_1.Square(blue, 5);
        redCircle.draw(); // Saida: Desenhando um Circulo da raio 10 na cor Vermelho
        blueSquare.draw(); // Saida: Desenhando um quadrado de lado 5 na cor Azul
        // O poder do Bridge: Podemos trocar a cor de um objeto existente ou criar novas combinacoes facilmente
        var blueCircle = new Circle_1.Circle(blue, 20);
        blueCircle.draw(); // Saida: Desenhando um Circulo de raio 20 na cor Azul
        var green = new GreenColor_1.GreenColor();
        var greenSquare = new Square_1.Square(green, 10);
        var greenTriangle = new Triangle_1.Triangle(green, 5);
        var redTriangle = new Triangle_1.Triangle(red, 10);
        greenSquare.draw();
        greenTriangle.draw();
        redTriangle.draw();
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
