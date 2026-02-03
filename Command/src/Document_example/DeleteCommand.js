"use strict";
/**
 * 2b Commando Concreto: Comando de delecao
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommand = void 0;
var DeleteCommand = /** @class */ (function () {
    function DeleteCommand(receiver, start, length) {
        this.receiver = receiver;
        this.start = start;
        this.length = length;
    }
    DeleteCommand.prototype.execute = function () {
        this.receiver.delete(this.start, this.length);
    };
    DeleteCommand.prototype.undo = function () {
        this.receiver.undo();
    };
    return DeleteCommand;
}());
exports.DeleteCommand = DeleteCommand;
