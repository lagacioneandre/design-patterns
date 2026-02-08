// import { Command } from "./command.interface";
// import { SandwichType, Bread, Meat, Cheese, Sauce, Additional } from "./ingredients.type";

// export class SandwichProcessor {
//     private command: Command;
//     private sandwich = {} as SandwichType;

//     constructor (command: Command) {
//         this.command = command;
//     }
    
//     createSandwich(bread: Bread, meat: Meat) {
//         this.sandwich.bread = bread;
//         this.sandwich.meat = meat;
//     }

//     addCheese(cheese: Cheese) {
//         this.sandwich.cheese = cheese;
//     }

//     addSauce(sauce: Sauce) {
//         this.sandwich.sauce = sauce;
//     }

//     addAditionals(additional: Additional) {
//         if (this.sandwich.additional?.length) {
//             this.sandwich.additional.push(additional);
//         } else {
//             this.sandwich.additional = [additional];
//         }
//     }   

//     requestOrder() {
//         this.command.execute(this.sandwich);
//     }
// }

import { Command } from "./command.interface";

export class SandwichProcessor {
    private command: Command;

    constructor (command: Command) {
        this.command = command;
    }
    
    // O Invocador agora é mais simples e focado:
    // Não tem mais os métodos de construção de sanduíche (addCheese, etc.)
    requestOrder() {
        console.log("--- Invoker: Requesting the Command to execute ---");
        this.command.execute(); // Apenas chama execute() sem passar dados
    }
}