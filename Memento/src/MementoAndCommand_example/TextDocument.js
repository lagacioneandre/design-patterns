"use strict";
/**
 * 3. O Originator (Documento)
 * Ele apenas executa operações brutas. Ele não sabe o que é um "Undo", ele apenas recebe ordens.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDocument = void 0;
var TextDocument = /** @class */ (function () {
    function TextDocument() {
        this.lines = [];
    }
    TextDocument.prototype.rawInsert = function (index, text) {
        this.lines.splice(index, 0, text);
    };
    TextDocument.prototype.rawDelete = function (index) {
        return this.lines.splice(index, 1)[0];
    };
    TextDocument.prototype.rawUpdate = function (index, text) {
        var old = this.lines[index];
        this.lines[index] = text;
        return old;
    };
    TextDocument.prototype.print = function () {
        console.log('Content: ', JSON.stringify(this.lines));
    };
    return TextDocument;
}());
exports.TextDocument = TextDocument;
