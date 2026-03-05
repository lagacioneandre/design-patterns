"use strict";
/**
 * The memento interface provides a way to retrieve the mememnto's metadata,
 * but it doesn't expose the Originator's state.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorMemento = void 0;
var EditorMemento = /** @class */ (function () {
    function EditorMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(11, 19);
    }
    // this is used by the Originator to get its state back
    EditorMemento.prototype.getState = function () {
        return this.state;
    };
    EditorMemento.prototype.getName = function () {
        return "".concat(this.date, " / (").concat(this.state.substring(0, 9), "...)");
    };
    return EditorMemento;
}());
exports.EditorMemento = EditorMemento;
