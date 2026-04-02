"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MilkDecorator_1 = require("./MilkDecorator");
var SimpleCoffee_1 = require("./SimpleCoffee");
var WhippedCreamDecorator_1 = require("./WhippedCreamDecorator");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // 1. um cafe simples
        var mueCafe = new SimpleCoffee_1.SimpleCoffee();
        console.log("".concat(mueCafe.getDescription(), " -> R$ ").concat(mueCafe.cost()));
        // Saida: Cafe simples -> R$ 5
        // 2. Queremos adicionar leite (envolvemos o cafe simples no decorator de leite)
        mueCafe = new MilkDecorator_1.MilkDecorator(mueCafe);
        console.log("".concat(mueCafe.getDescription(), " -> R$ ").concat(mueCafe.cost()));
        // Saida: Cafe simples, Leite -> R$ 7
        // 3. Agora queremos adicionar chantilly por cima de tudo
        mueCafe = new WhippedCreamDecorator_1.WhippedCreamDecorator(mueCafe);
        console.log("".concat(mueCafe.getDescription(), " -> R$ ").concat(mueCafe.cost()));
        // Saida: Cafe simples, Leite, Chantilly -> R$ 10.5
        // 4. E se eu quisesse um cafe com DUAS porcoes de leite?
        var cafeDuploLeite = new SimpleCoffee_1.SimpleCoffee();
        cafeDuploLeite = new MilkDecorator_1.MilkDecorator(cafeDuploLeite);
        cafeDuploLeite = new MilkDecorator_1.MilkDecorator(cafeDuploLeite);
        console.log("".concat(cafeDuploLeite.getDescription(), " -> R$ ").concat(cafeDuploLeite.cost()));
        // Saida: Cafe simples, leite, leite -> R$ 9
    };
    return Client;
}());
new Client().execute();
