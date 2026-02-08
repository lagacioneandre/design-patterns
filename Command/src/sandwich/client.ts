// import { Sandwich } from "./Sandwich";
// import { SandwichCommand } from "./SandwichCommand";
// import { SandwichProcessor } from "./SandwichProcessor";

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

import { Sandwich } from "./Sandwich";
import { SandwichCommand } from "./SandwichCommand";
import { SandwichProcessor } from "./SandwichProcessor";
import { SandwichType } from "./ingredients.type";

function client() {
    // 1. O cliente monta o objeto de dados que o Comando irá encapsular
    const order: SandwichType = {
        bread: "Brioche",
        meat: "Bovina",
        cheese: "Cheddar",
        sauce: "Ketchup",
        additional: ["Bacon", "Ovo"]
    };

    // 2. O Receptor
    const receiver = new Sandwich();
    
    // 3. O Comando Concreto (encapsula o Receptor E o Pedido)
    const command = new SandwichCommand(receiver, order); 
    
    // 4. O Invocador (recebe o Comando)
    const processor = new SandwichProcessor(command);
    
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