"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorHistory_1 = require("./EditorHistory");
var TextDocument_1 = require("./TextDocument");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var document = new TextDocument_1.TextDocument();
        var history = new EditorHistory_1.EditorHistory(document);
        history.save(document.addLine('Line 1')); // Line 1
        history.save(document.addLine('Line 2')); // Line 1, Line 2
        history.save(document.editLine(0, 'Line 1 modified')); // Line 1 modified, Line 2
        history.undo(); // Line 1, Line 2
        history.undo(); // Line 1
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
