"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = void 0;
// 1. THE MEMENTO (The "Secret Envelope")
var Memento = /** @class */ (function () {
    // Only the Originator should really be "opening" this
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
exports.Memento = Memento;
