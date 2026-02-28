"use strict";
/**
 * 1. O Memento Incremental
 * Ele continua sendo um objeto passivo que guarda o "antes".
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMemento = void 0;
var TextMemento = /** @class */ (function () {
    function TextMemento(type, index, text) {
        this.type = type;
        this.index = index;
        this.text = text;
    }
    return TextMemento;
}());
exports.TextMemento = TextMemento;
