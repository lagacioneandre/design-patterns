"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceCommand = void 0;
class UpdatePriceCommand {
    constructor(receiver, productName, newPrice) {
        this.oldPrice = 0;
        this.receiver = receiver;
        this.productName = productName;
        this.newPrice = newPrice;
    }
    execute() {
        const inventoryProduct = this.receiver.getProduct(this.productName);
        if (!inventoryProduct) {
            console.log('Product not found!');
            return false;
        }
        this.oldPrice = inventoryProduct.price;
        this.receiver.updatePrice(this.productName, this.newPrice);
        return true;
    }
    undo() {
        this.receiver.updatePrice(this.productName, this.oldPrice);
    }
}
exports.UpdatePriceCommand = UpdatePriceCommand;
