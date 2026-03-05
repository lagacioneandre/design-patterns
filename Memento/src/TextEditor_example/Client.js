"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HistoryCaretaker_1 = require("./HistoryCaretaker");
var TextEditor_1 = require("./TextEditor");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var editor = new TextEditor_1.TextEditor();
        var history = new HistoryCaretaker_1.HistoryCaretaker(editor);
        editor.type('Hello ');
        history.backup(); // Saves 'Hello '
        editor.type('World!');
        history.backup(); // Saves 'World!'
        editor.type(' This should be deleted.');
        console.log("Current content: ".concat(editor.getContent()));
        history.undo(); // Goes back to 'Hello World!'
        console.log("After Undo: ".concat(editor.getContent()));
        history.undo(); // Goes back to 'Hello '
        console.log("After Second Undo: ".concat(editor.getContent()));
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
/**
 * Pros
 * Encapsulation: The internal state of the Originator stays hidden.
 * Simplified Originator: The Originator doesn't need to manage history, only save/load.
 * Atomic Restores: You either restore the whole state or nothing.
 *
 * Cons
 * Memory usage: If the state is huge and you save often, RAM usage explodes.
 * Lifecycle Management: The Caretaker must track the Originator's lifecycle to avoid memory leaks.
 * Performance: Copying large objects for every "save" can be slow.
 */ 
