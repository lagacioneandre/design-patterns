import { Product } from "./product.type";

export class Inventory {
    private inventory = new Map<string, Product>();
    private readonly defaultPrice = 10;

    updateQuantity(productName: string, delta: number) {
        const productInventory = this.getProduct(productName);
        if (!productInventory) {
            this.inventory.set(productName, {
                price: this.defaultPrice,
                quantity: delta,
            });
            console.log(`Product ${productName} created!`);
            return;
        }

        productInventory.quantity += delta;
        this.inventory.set(productName, productInventory);
        console.log(`The quantity of the product ${productName} updated to ${productInventory.quantity}.`);
    }

    updatePrice(productName: string, newPrice: number) {
        const productInventory = this.getProduct(productName);
        if (productInventory) {
            productInventory.price = newPrice;
            this.inventory.set(productName, productInventory);
            console.log(`The price of the product ${productName} updated to ${productInventory.price}.`);
            return true;
        }

        return false;
    }

    getProduct(productName: string) {
        return this.inventory.get(productName);
    }
}