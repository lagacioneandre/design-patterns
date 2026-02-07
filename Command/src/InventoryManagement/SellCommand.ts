import { ICommand } from "./command.interface";
import { Inventory } from "./Inventory";
import { Product } from "./product.type";

export class SellCommand implements ICommand {
    private receiver: Inventory;
    private productName: string;
    private quantity: number;

    constructor (receiver: Inventory, productName: string, quantity: number) {
        this.receiver = receiver;
        this.productName = productName;
        this.quantity = quantity;
    }

    execute(): boolean {
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

    undo(): void {
        this.receiver.updateQuantity(this.productName, this.quantity);
    }
}