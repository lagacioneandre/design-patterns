"use strict";
// import { Sandwich } from "./Sandwich";
// import { SandwichCommand } from "./SandwichCommand";
// import { SandwichProcessor } from "./SandwichProcessor";
Object.defineProperty(exports, "__esModule", { value: true });
// function client() {
//     const receiver = new Sandwich();
//     const command = new SandwichCommand(receiver);
//     const processor = new SandwichProcessor(command);
//     processor.createSandwich("Brioche", "Bovina");
//     processor.addCheese("Cheddar");
//     processor.addSauce("Ketchup");
//     processor.addAditionals("Bacon");
//     processor.addAditionals("Ovo");
//     processor.requestOrder();
// }
// client();
var Sandwich_1 = require("./Sandwich");
var SandwichCommand_1 = require("./SandwichCommand");
var SandwichProcessor_1 = require("./SandwichProcessor");
function client() {
    // 1. O cliente monta o objeto de dados que o Comando irá encapsular
    var order = {
        bread: "Brioche",
        meat: "Bovina",
        cheese: "Cheddar",
        sauce: "Ketchup",
        additional: ["Bacon", "Ovo"]
    };
    // 2. O Receptor
    var receiver = new Sandwich_1.Sandwich();
    // 3. O Comando Concreto (encapsula o Receptor E o Pedido)
    var command = new SandwichCommand_1.SandwichCommand(receiver, order);
    // 4. O Invocador (recebe o Comando)
    var processor = new SandwichProcessor_1.SandwichProcessor(command);
    // 5. O Invocador executa o Comando (que por sua vez executa o Receptor)
    processor.requestOrder();
}
client();
/*
Saída esperada:
--- Invoker: Requesting the Command to execute ---
--- Command: Preparing the order for the Receiver ---
--- Building your sandwich (Receiver) ---

Ingredients:

Bread: Brioche
Meat: Bovina
Cheese: Cheddar
Sauce: Ketchup
Additionals: Bacon, Ovo
*/ 
