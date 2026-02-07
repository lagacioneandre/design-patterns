"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStockCommand = void 0;
class AddStockCommand {
    constructor(receiver, productName, quantity) {
        this.receiver = receiver;
        this.productName = productName;
        this.quantity = quantity;
    }
    execute() {
        this.receiver.updateQuantity(this.productName, this.quantity);
        return true;
    }
    undo() {
        this.receiver.updateQuantity(this.productName, this.quantity * -1);
    }
}
exports.AddStockCommand = AddStockCommand;
