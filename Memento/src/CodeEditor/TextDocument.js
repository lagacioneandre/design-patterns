"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDocument = void 0;
var TextDelta_1 = require("./TextDelta");
var TextDocument = /** @class */ (function () {
    function TextDocument() {
        this.documentFile = [];
    }
    TextDocument.prototype.addLine = function (content) {
        this.documentFile.push(content);
        var index = this.documentFile.length - 1;
        this.print();
        return new TextDelta_1.TextDelta('INSERT', index, '');
    };
    TextDocument.prototype.editLine = function (index, newContent) {
        var currentContent = this.documentFile[index];
        this.documentFile.splice(index, 1, newContent);
        this.print();
        return new TextDelta_1.TextDelta('UPDATE', index, currentContent);
    };
    TextDocument.prototype.removeLine = function (index) {
        var currentContent = this.documentFile[index];
        this.documentFile.splice(index, 1);
        this.print();
        return new TextDelta_1.TextDelta('DELETE', index, currentContent);
    };
    TextDocument.prototype.undo = function (memento) {
        var _a = memento.getStatus(), action = _a.action, index = _a.index, prevValue = _a.prevValue;
        if (action === 'DELETE') {
            this.documentFile.splice(index, 0, prevValue);
            this.print();
        }
        else if (action === 'INSERT') {
            this.documentFile.splice(index, 1);
            this.print();
        }
        else {
            this.documentFile.splice(index, 1, prevValue);
            this.print();
        }
    };
    TextDocument.prototype.print = function () {
        this.documentFile.map(function (item) { return console.log(item); });
    };
    return TextDocument;
}());
exports.TextDocument = TextDocument;
