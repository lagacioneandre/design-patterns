import { ICommand } from "./command.interface";
import { Inventory } from "./Inventory";

export class AddStockCommand implements ICommand {
    private receiver: Inventory;
    private productName: string;
    private quantity: number;

    constructor (receiver: Inventory, productName: string, quantity: number) {
        this.receiver = receiver;
        this.productName = productName;
        this.quantity = quantity;
    }

    execute(): boolean {
        this.receiver.updateQuantity(this.productName, this.quantity);
        return true;
    }

    undo(): void {
        this.receiver.updateQuantity(this.productName, this.quantity * -1);
    }
}