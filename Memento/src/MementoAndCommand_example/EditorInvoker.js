"use strict";
/**
 * 5. O Invocador / Caretaker (EditorInvoker)
 * Este é o cérebro da arquitetura. Ele gerencia o Undo e o Redo.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorInvoker = void 0;
var EditorInvoker = /** @class */ (function () {
    function EditorInvoker() {
        this.undoStack = [];
        this.redoStack = [];
    }
    EditorInvoker.prototype.executeCommand = function (command) {
        command.execute();
        this.undoStack.push(command);
        this.redoStack = []; // Limpa o redo quando uma noca acao 'e feita
    };
    EditorInvoker.prototype.undo = function () {
        var command = this.undoStack.pop();
        if (command) {
            command.undo();
            this.redoStack.push(command);
        }
    };
    EditorInvoker.prototype.redo = function () {
        var command = this.redoStack.pop();
        if (command) {
            command.execute();
            this.undoStack.push(command);
        }
    };
    return EditorInvoker;
}());
exports.EditorInvoker = EditorInvoker;
