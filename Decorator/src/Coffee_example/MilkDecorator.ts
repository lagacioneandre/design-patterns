// Concrete Decorator A

import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${super.getDescription()}, Leite`;
    }

    cost(): number {
        return super.cost() + 2;
    }
}