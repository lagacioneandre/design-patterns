"use strict";
/**
 * 4. Implementação do Command (Ex: Insert)
 * O comando usa o Memento internamente para saber como voltar atrás.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertCommand = void 0;
var TextMemento_1 = require("./TextMemento");
var InsertCommand = /** @class */ (function () {
    function InsertCommand(doc, text, index) {
        this.doc = doc;
        this.text = text;
        this.index = index;
    }
    InsertCommand.prototype.execute = function () {
        var _a;
        var targetIndex = (_a = this.index) !== null && _a !== void 0 ? _a : this.doc.lines.length;
        this.doc.rawInsert(targetIndex, this.text);
        // Criamos o memento do que foi feito para podermos desfazer
        this.memento = new TextMemento_1.TextMemento('INSERT', targetIndex, this.text);
    };
    InsertCommand.prototype.undo = function () {
        if (this.memento) {
            this.doc.rawDelete(this.memento.index);
        }
    };
    return InsertCommand;
}());
exports.InsertCommand = InsertCommand;
