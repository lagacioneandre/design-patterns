import { AddStockCommand } from "./AddStockCommnand";
import { Inventory } from "./Inventory";
import { SellCommand } from "./SellCommand";
import { StoreManager } from "./StoreManager";
import { UpdatePriceCommand } from "./UpdatePriceCommand";

export class Client {
    execute() {
        const inventory = new Inventory();
        const storeManager = new StoreManager();

        const addProduct = new AddStockCommand(inventory, 'Smartphone', 10);
        storeManager.process(addProduct); // Product Smartphone created

        const updateSmartphonePrice = new UpdatePriceCommand(inventory, 'Smartphone', 2000);
        storeManager.process(updateSmartphonePrice); // The price of the product Smartphone updated to 2000

        const updateAwayProduct = new UpdatePriceCommand(inventory, 'laptop', 1200);
        storeManager.process(updateAwayProduct); //Product not found

        const sellSmartphone = new SellCommand(inventory, 'Smartphone', 3);
        storeManager.process(sellSmartphone); // The quantity of the product Smartphone updated to 7.

        const sellAwayProduct = new SellCommand(inventory, 'laptop', 1200);
        storeManager.process(sellAwayProduct); // Product not found

        const newUpdateSmartphonePrice = new UpdatePriceCommand(inventory, 'Smartphone', 1800);
        storeManager.process(newUpdateSmartphonePrice); // The price of the product Smartphone updated to 1800

        storeManager.undo(); // The price of the product Smartphone updated to 2000
        storeManager.undo(); // The quantity of the product Smartphone updated to 10.

        const addMouse = new AddStockCommand(inventory, 'Mouse', 1);
        storeManager.process(addMouse); // Product Mouse created

        const sellMouse = new SellCommand(inventory, 'Mouse', 5);
        storeManager.process(sellMouse); // Inventory for this product is not enougth!
    }
}

(function() {
    new Client().execute();
})();