"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorInvoker_1 = require("./EditorInvoker");
var InsertCommand_1 = require("./InsertCommand");
var TextDocument_1 = require("./TextDocument");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var myDoc = new TextDocument_1.TextDocument();
        var invoker = new EditorInvoker_1.EditorInvoker();
        // 1. Inserir Linha
        var insert1 = new InsertCommand_1.InsertCommand(myDoc, 'Primeira linha');
        invoker.executeCommand(insert1);
        myDoc.print(); // ['Primeira linha']
        // 2. Inserir outra
        var insert2 = new InsertCommand_1.InsertCommand(myDoc, 'Segunda linha');
        invoker.executeCommand(insert2);
        myDoc.print(); // ['Primeira linha', 'Segunda linha']
        // 3. Undo
        console.log('--- Desfazendo ---');
        invoker.undo();
        myDoc.print(); // ['Primeira linha']
        // 4. Redo
        console.log(' --- Refazendo ---');
        invoker.redo();
        myDoc.print(); // ['Primeira linha', 'Segunda linha']
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
