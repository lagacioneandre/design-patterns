import { Coffee } from "./coffee.interface";

// Concrete Compoent
export class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }

    getDescription(): string {
        return 'Cafe Simples';
    }
}