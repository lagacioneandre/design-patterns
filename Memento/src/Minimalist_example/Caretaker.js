"use strict";
// 3. THE CARETAKER (The "Vault" - It just holds the envelope)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = void 0;
var Caretaker = /** @class */ (function () {
    function Caretaker() {
    }
    Caretaker.prototype.store = function (memento) {
        console.log('Caretaker: I received the envelope. I wont look inside!');
        this.memento = memento;
    };
    Caretaker.prototype.retrieve = function () {
        console.log('Carataker: Giving the envelope back.');
        return this.memento;
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
