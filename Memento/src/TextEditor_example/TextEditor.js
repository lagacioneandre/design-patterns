"use strict";
/**
 * The Originator:
 * This class holds the actual business logic and the state we car about.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEditor = void 0;
var EditorMemento_1 = require("./EditorMemento");
var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.content = '';
    }
    TextEditor.prototype.type = function (text) {
        console.log("Editor: Typing... \"".concat(text, "\""));
        this.content += text;
    };
    TextEditor.prototype.getContent = function () {
        return this.content;
    };
    // Creates the "snapshot"
    TextEditor.prototype.save = function () {
        console.log('Editor: saving state...');
        return new EditorMemento_1.EditorMemento(this.content);
    };
    // Restore the snapshot
    TextEditor.prototype.restore = function (memento) {
        this.content = memento.getState();
        console.log("Editor: State restored to: \"".concat(this.content, "\""));
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;
