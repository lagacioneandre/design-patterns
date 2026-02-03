"use strict";
/**
 * 2a. Commando Concreto: Comando de Insercao.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertCommand = void 0;
var InsertCommand = /** @class */ (function () {
    function InsertCommand(receiver, text, pos) {
        this.receiver = receiver;
        this.textToInsert = text;
        this.position = pos;
    }
    // A operacao real
    InsertCommand.prototype.execute = function () {
        this.receiver.insert(this.textToInsert, this.position);
    };
    // Para desfazer, podemos chamar o metodo undo do receiver
    InsertCommand.prototype.undo = function () {
        this.receiver.undo();
    };
    return InsertCommand;
}());
exports.InsertCommand = InsertCommand;
