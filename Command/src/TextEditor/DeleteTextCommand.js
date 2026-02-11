"use strict";
// import { Command } from "./command.interface";
// import { Document } from "./Document";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTextCommand = void 0;
var DeleteTextCommand = /** @class */ (function () {
    function DeleteTextCommand(receiver, position, length) {
        this.receiver = receiver;
        this.position = position;
        this.length = length;
        this.deletedText = '';
    }
    DeleteTextCommand.prototype.execute = function () {
        // Salvamos o que foi deletado para poder restaurar depois
        this.deletedText = this.receiver.delete(this.position, this.length);
        console.log("[Deletado]: \"".concat(this.deletedText, "\" da pos ").concat(this.position));
    };
    DeleteTextCommand.prototype.undo = function () {
        // Para desfazer uma deleção, re-inserimos o texto salvo
        this.receiver.insert(this.deletedText, this.position);
        console.log("[Undo Deletar]: Restaurado \"".concat(this.deletedText, "\""));
    };
    return DeleteTextCommand;
}());
exports.DeleteTextCommand = DeleteTextCommand;
