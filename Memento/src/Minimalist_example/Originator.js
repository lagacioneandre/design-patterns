"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Originator = void 0;
var Memento_1 = require("./Memento");
// 2. THE ORIGINATOR (The "Agent" with the secret)
var Originator = /** @class */ (function () {
    function Originator() {
        this.state = '';
    }
    // Step A: Create the envelope
    Originator.prototype.save = function () {
        console.log("Originator: Putting \"".concat(this.state, "\" into an envelop."));
        return new Memento_1.Memento(this.state);
    };
    // STEP B: Open the envelope and update itself
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("Originator: I opened the envelope. My styate is now: \"".concat(this.state, "\""));
    };
    return Originator;
}());
exports.Originator = Originator;
