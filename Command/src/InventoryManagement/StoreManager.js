"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreManager = void 0;
class StoreManager {
    constructor() {
        this.history = [];
    }
    process(command) {
        const response = command.execute();
        if (response)
            this.history.push(command);
    }
    undo() {
        const command = this.history.pop();
        if (!command) {
            console.log('No commands to undo!');
            return;
        }
        command.undo();
    }
}
exports.StoreManager = StoreManager;
