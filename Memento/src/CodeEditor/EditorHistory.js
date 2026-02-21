"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorHistory = void 0;
var EditorHistory = /** @class */ (function () {
    function EditorHistory(textDocument) {
        this.textDocument = textDocument;
        this.history = [];
    }
    EditorHistory.prototype.save = function (memento) {
        this.history.push(memento);
    };
    EditorHistory.prototype.undo = function () {
        var memento = this.history.pop();
        if (!memento) {
            console.log('Nothing to undo!');
            return;
        }
        this.textDocument.undo(memento);
    };
    return EditorHistory;
}());
exports.EditorHistory = EditorHistory;
