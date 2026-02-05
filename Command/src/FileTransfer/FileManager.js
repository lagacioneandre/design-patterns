"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
class FileManager {
    constructor() {
        this.history = [];
    }
    execute(command) {
        const isOperationSuccess = command.execte();
        if (isOperationSuccess)
            this.history.push(command);
    }
    undo() {
        const command = this.history.pop();
        if (!command) {
            console.log('There are registry in history');
            return;
        }
        command.undo();
    }
}
exports.FileManager = FileManager;
