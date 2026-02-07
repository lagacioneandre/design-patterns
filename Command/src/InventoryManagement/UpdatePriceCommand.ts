import { ICommand } from "./command.interface";
import { Inventory } from "./Inventory";

export class UpdatePriceCommand implements ICommand {
    private receiver: Inventory;
    private productName: string;
    private newPrice: number;
    private oldPrice = 0;

    constructor (receiver: Inventory, productName: string, newPrice: number) {
        this.receiver = receiver;
        this.productName = productName;
        this.newPrice = newPrice;
    }

    execute(): boolean {
        const inventoryProduct = this.receiver.getProduct(this.productName);
        if (!inventoryProduct) {
            console.log('Product not found!');
            return false;
        }

        this.oldPrice = inventoryProduct.price;
        this.receiver.updatePrice(this.productName, this.newPrice);
        return true;
    }

    undo(): void {
        this.receiver.updatePrice(this.productName, this.oldPrice);
    }
}