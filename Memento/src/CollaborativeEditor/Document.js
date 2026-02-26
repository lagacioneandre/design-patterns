"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var DiffHelper_1 = require("./DiffHelper");
var IncrementalMemento_1 = require("./IncrementalMemento");
var Document = /** @class */ (function () {
    function Document() {
        this.oldContent = '';
    }
    Document.prototype.setText = function (newText) {
        console.log("Adding new text: ".concat(newText));
        this.content = newText;
    };
    Document.prototype.save = function () {
        var _a = DiffHelper_1.DiffHelper.calculate(this.oldContent, this.content), action = _a.action, index = _a.index, text = _a.text;
        this.oldContent = this.content;
        return new IncrementalMemento_1.IncrementalMemento(action, index, text);
    };
    Document.prototype.restore = function (text) {
        this.content = text;
        this.oldContent = text;
    };
    Document.prototype.getContent = function () {
        return this.content;
    };
    return Document;
}());
exports.Document = Document;
