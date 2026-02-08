// import { Command } from "./command.interface";
// import { SandwichType } from "./ingredients.type";
// import { Sandwich } from "./Sandwich";

// export class SandwichCommand implements Command {
//     private receiver: Sandwich;

//     constructor (receiver: Sandwich) {
//         this.receiver = receiver;
//     }

//     execute(sandwich: SandwichType): void {
//         this.receiver.createSandwich(sandwich);
//         this.receiver.build();
//     }
// }

import { Command } from "./command.interface";
import { SandwichType } from "./ingredients.type";
import { Sandwich } from "./Sandwich";

export class SandwichCommand implements Command {
    private receiver: Sandwich;
    private sandwich: SandwichType; // Armazena o pedido

    constructor (receiver: Sandwich, sandwich: SandwichType) { // Recebe o pedido no construtor
        this.receiver = receiver;
        this.sandwich = sandwich;
    }

    execute(): void { // Não recebe mais parâmetro
        console.log("--- Command: Preparing the order for the Receiver ---");
        this.receiver.createSandwich(this.sandwich); // Usa o pedido armazenado
        this.receiver.build();
    }
}