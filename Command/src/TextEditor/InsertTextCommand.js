"use strict";
// import { Command } from "./command.interface";
// import { Document } from "./Document";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertTextCommand = void 0;
var InsertTextCommand = /** @class */ (function () {
    function InsertTextCommand(receiver, text, position) {
        this.receiver = receiver;
        this.text = text;
        this.position = position;
    }
    InsertTextCommand.prototype.execute = function () {
        this.receiver.insert(this.text, this.position);
        console.log("[Inserido]: \"".concat(this.text, "\" na pos ").concat(this.position));
    };
    InsertTextCommand.prototype.undo = function () {
        // Para desfazer uma inserção, deletamos o comprimento do texto que adicionamos
        this.receiver.delete(this.position, this.text.length);
        console.log("[Undo Inserir]: Removido \"".concat(this.text, "\""));
    };
    return InsertTextCommand;
}());
exports.InsertTextCommand = InsertTextCommand;
