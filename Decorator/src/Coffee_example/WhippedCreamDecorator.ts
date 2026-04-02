// Concrete Decorator B

import { CoffeeDecorator } from "./CoffeeDecorator";

export class WhippedCreamDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${super.getDescription()}, Chantilly`;
    }

    cost(): number {
        return super.cost() + 3.5;
    }
}