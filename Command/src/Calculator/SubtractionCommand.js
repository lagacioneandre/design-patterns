"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractionCommand = void 0;
var SubtractionCommand = /** @class */ (function () {
    function SubtractionCommand(receiver, value) {
        this.receiver = receiver;
        this.value = value;
    }
    SubtractionCommand.prototype.execute = function () {
        this.receiver.toSubtract(this.value);
    };
    SubtractionCommand.prototype.undo = function () {
        this.receiver.toAdd(this.value);
    };
    return SubtractionCommand;
}());
exports.SubtractionCommand = SubtractionCommand;
