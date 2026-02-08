// import { SandwichType } from "./ingredients.type";

// export class Sandwich {
//     private ingredients!: SandwichType;

//     createSandwich(ingredients: SandwichType) {
//         this.ingredients = ingredients
//     }

//     build() {
//         console.log('--- Building your sandwich ---\n');
//         console.log('Ingredients:\n');
//         console.log(`Bread: ${this.ingredients.bread}\n`);
//         console.log(`Meat: ${this.ingredients.meat}\n`);
//         console.log(`Cheese: ${this.ingredients.cheese}\n`);
//         console.log(`Sauce: ${this.ingredients.sauce}\n`);
//         console.log(`Additionals: ${this.ingredients.additional?.forEach(item => item + ',')}\n`);
//     }
// }

import { SandwichType } from "./ingredients.type";

export class Sandwich {
    private ingredients!: SandwichType;

    createSandwich(ingredients: SandwichType) {
        this.ingredients = ingredients
    }

    build() {
        console.log('--- Building your sandwich (Receiver) ---\n');
        console.log('Ingredients:\n');
        console.log(`Bread: ${this.ingredients.bread}`);
        console.log(`Meat: ${this.ingredients.meat}`);
        console.log(`Cheese: ${this.ingredients.cheese ?? 'None'}`); // Adicionado 'None' para campos opcionais
        console.log(`Sauce: ${this.ingredients.sauce ?? 'None'}`);
        // Correção: usa join() para formatar corretamente o array de adicionais
        const additionals = this.ingredients.additional?.length
            ? this.ingredients.additional.join(', ')
            : 'None';
        console.log(`Additionals: ${additionals}\n`);
    }
}