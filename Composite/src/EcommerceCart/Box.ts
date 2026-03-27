import { CartItem } from "./cart-item.interface";

export class Box implements CartItem {
    private products: CartItem[] = [];

    add(item: CartItem) {
        this.products.push(item);
    }

    remove(item: CartItem) {
        const index = this.products.indexOf(item);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    getPrice(): number {
        return this.products.reduce((acc: number, item: CartItem) => {
            return acc + item.getPrice()
        }, 0);
    }

    getWeight(): number {
        return this.products.reduce((acc: number, item: CartItem) => {
            return acc + item.getWeight();
        }, 0.2);
    }
}