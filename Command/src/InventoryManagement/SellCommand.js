"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellCommand = void 0;
class SellCommand {
    constructor(receiver, productName, quantity) {
        this.receiver = receiver;
        this.productName = productName;
        this.quantity = quantity;
    }
    execute() {
        const productInventory = this.receiver.getProduct(this.productName);
        if (!productInventory) {
            console.log('Product not found!');
            return false;
        }
        if (!productInventory.quantity || productInventory.quantity < this.quantity) {
            console.log('Inventory for this product is not enougth!');
            return false;
        }
        this.receiver.updateQuantity(this.productName, this.quantity * -1);
        return true;
    }
    undo() {
        this.receiver.updateQuantity(this.productName, this.quantity);
    }
}
exports.SellCommand = SellCommand;
