"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncrementalMemento = void 0;
var IncrementalMemento = /** @class */ (function () {
    function IncrementalMemento(action, index, text) {
        this.action = action;
        this.index = index;
        this.text = text;
    }
    IncrementalMemento.prototype.getDetails = function () {
        return {
            action: this.action,
            index: this.index,
            text: this.text,
        };
    };
    return IncrementalMemento;
}());
exports.IncrementalMemento = IncrementalMemento;
