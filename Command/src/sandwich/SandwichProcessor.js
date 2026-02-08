"use strict";
// import { Command } from "./command.interface";
// import { SandwichType, Bread, Meat, Cheese, Sauce, Additional } from "./ingredients.type";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandwichProcessor = void 0;
var SandwichProcessor = /** @class */ (function () {
    function SandwichProcessor(command) {
        this.command = command;
    }
    // O Invocador agora é mais simples e focado:
    // Não tem mais os métodos de construção de sanduíche (addCheese, etc.)
    SandwichProcessor.prototype.requestOrder = function () {
        console.log("--- Invoker: Requesting the Command to execute ---");
        this.command.execute(); // Apenas chama execute() sem passar dados
    };
    return SandwichProcessor;
}());
exports.SandwichProcessor = SandwichProcessor;
