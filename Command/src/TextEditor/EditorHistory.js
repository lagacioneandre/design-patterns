"use strict";
// import { Command } from "./command.interface";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorHistory = void 0;
var EditorHistory = /** @class */ (function () {
    function EditorHistory() {
        this.history = [];
    }
    EditorHistory.prototype.executeCommand = function (command) {
        command.execute();
        this.history.push(command);
    };
    EditorHistory.prototype.undo = function () {
        var command = this.history.pop();
        if (command) {
            console.log("\n[Invoker] Desfazendo \u00FAltimo comando...");
            command.undo();
        }
        else {
            console.log('[Invoker] Nada para desfazer.');
        }
    };
    return EditorHistory;
}());
exports.EditorHistory = EditorHistory;
