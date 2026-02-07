"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const AddStockCommnand_1 = require("./AddStockCommnand");
const Inventory_1 = require("./Inventory");
const SellCommand_1 = require("./SellCommand");
const StoreManager_1 = require("./StoreManager");
const UpdatePriceCommand_1 = require("./UpdatePriceCommand");
class Client {
    execute() {
        const inventory = new Inventory_1.Inventory();
        const storeManager = new StoreManager_1.StoreManager();
        const addProduct = new AddStockCommnand_1.AddStockCommand(inventory, 'Smartphone', 10);
        storeManager.process(addProduct); // Product Smartphone created
        const updateSmartphonePrice = new UpdatePriceCommand_1.UpdatePriceCommand(inventory, 'Smartphone', 2000);
        storeManager.process(updateSmartphonePrice); // The price of the product Smartphone updated to 2000
        const updateAwayProduct = new UpdatePriceCommand_1.UpdatePriceCommand(inventory, 'laptop', 1200);
        storeManager.process(updateAwayProduct); //Product not found
        const sellSmartphone = new SellCommand_1.SellCommand(inventory, 'Smartphone', 3);
        storeManager.process(sellSmartphone); // The quantity of the product Smartphone updated to 7.
        const sellAwayProduct = new SellCommand_1.SellCommand(inventory, 'laptop', 1200);
        storeManager.process(sellAwayProduct); // Product not found
        const newUpdateSmartphonePrice = new UpdatePriceCommand_1.UpdatePriceCommand(inventory, 'Smartphone', 1800);
        storeManager.process(newUpdateSmartphonePrice); // The price of the product Smartphone updated to 1800
        storeManager.undo(); // The price of the product Smartphone updated to 2000
        storeManager.undo(); // The quantity of the product Smartphone updated to 10.
        const addMouse = new AddStockCommnand_1.AddStockCommand(inventory, 'Mouse', 1);
        storeManager.process(addMouse); // Product Mouse created
        const sellMouse = new SellCommand_1.SellCommand(inventory, 'Mouse', 5);
        storeManager.process(sellMouse); // Inventory for this product is not enougth!
    }
}
exports.Client = Client;
(function () {
    new Client().execute();
})();
