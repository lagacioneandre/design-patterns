"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionCommand = void 0;
var AdditionCommand = /** @class */ (function () {
    function AdditionCommand(receiver, value) {
        this.receiver = receiver;
        this.value = value;
    }
    AdditionCommand.prototype.execute = function () {
        this.receiver.toAdd(this.value);
    };
    AdditionCommand.prototype.undo = function () {
        this.receiver.toSubtract(this.value);
    };
    return AdditionCommand;
}());
exports.AdditionCommand = AdditionCommand;
