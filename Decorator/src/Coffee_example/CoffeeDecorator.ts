import { Coffee } from "./coffee.interface";

// Base Decorator
export abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    cost(): number {
        return this.coffee.cost();
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }
}