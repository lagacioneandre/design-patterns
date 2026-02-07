"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.inventory = new Map();
        this.defaultPrice = 10;
    }
    updateQuantity(productName, delta) {
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
    updatePrice(productName, newPrice) {
        const productInventory = this.getProduct(productName);
        if (productInventory) {
            productInventory.price = newPrice;
            this.inventory.set(productName, productInventory);
            console.log(`The price of the product ${productName} updated to ${productInventory.price}.`);
            return true;
        }
        return false;
    }
    getProduct(productName) {
        return this.inventory.get(productName);
    }
}
exports.Inventory = Inventory;
