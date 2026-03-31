import { CartItem } from "./cart-item.interface";

export class Prodcut implements CartItem {
    constructor (
        private name: string,
        private price: number,
        private weight: number
    ) {}

    getPrice(): number {
        return this.price;
    }

    getWeight(): number {
        return this.weight;
    }
}