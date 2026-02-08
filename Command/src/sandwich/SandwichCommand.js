"use strict";
// import { Command } from "./command.interface";
// import { SandwichType } from "./ingredients.type";
// import { Sandwich } from "./Sandwich";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandwichCommand = void 0;
var SandwichCommand = /** @class */ (function () {
    function SandwichCommand(receiver, sandwich) {
        this.receiver = receiver;
        this.sandwich = sandwich;
    }
    SandwichCommand.prototype.execute = function () {
        console.log("--- Command: Preparing the order for the Receiver ---");
        this.receiver.createSandwich(this.sandwich); // Usa o pedido armazenado
        this.receiver.build();
    };
    return SandwichCommand;
}());
exports.SandwichCommand = SandwichCommand;
