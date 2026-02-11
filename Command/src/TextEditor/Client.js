"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteTextCommand_1 = require("./DeleteTextCommand");
var Document_1 = require("./Document");
var EditorHistory_1 = require("./EditorHistory");
var InsertTextCommand_1 = require("./InsertTextCommand");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // const document = new Document();
        // const editorHistory = new EditorHistory();
        // const insert1 = new InsertTextCommand(document, 'Hoje a noite', 0);
        // editorHistory.setCommand(insert1);
        // insert1.execute();
        // const insert2 = new InsertTextCommand(document, ' aqui na cidade', 13);
        // editorHistory.setCommand(insert2);
        // insert2.execute();
        // editorHistory.undo();
        // const insert3 = new InsertTextCommand(document, ' aqui na selva, quem dorme e o leao.', 13);
        // editorHistory.setCommand(insert3);
        // insert3.execute();
        // const delete1 = new DeleteTextCommand(document, 0, 7);
        // editorHistory.setCommand(delete1);
        // delete1.execute();
        // editorHistory.undo();
        var meuDoc = new Document_1.Document();
        var historico = new EditorHistory_1.EditorHistory();
        // 1. Inserir Texto
        historico.executeCommand(new InsertTextCommand_1.InsertTextCommand(meuDoc, "Olá", 0));
        historico.executeCommand(new InsertTextCommand_1.InsertTextCommand(meuDoc, " Mundo", 3));
        console.log("Conte\u00FAdo Atual: \"".concat(meuDoc.getContent(), "\""));
        // 2. Deletar Texto
        historico.executeCommand(new DeleteTextCommand_1.DeleteTextCommand(meuDoc, 0, 3)); // Deleta "Olá"
        console.log("Conte\u00FAdo Atual: \"".concat(meuDoc.getContent(), "\""));
        // 3. Desfazer Deleção
        historico.undo();
        console.log("Conte\u00FAdo Atual: \"".concat(meuDoc.getContent(), "\""));
        // 4. Desfazer Inserção
        historico.undo();
        console.log("Conte\u00FAdo Atual: \"".concat(meuDoc.getContent(), "\""));
        // 4. Desfazer Inserção
        historico.undo();
        console.log("Conte\u00FAdo Atual: \"".concat(meuDoc.getContent(), "\""));
        // 4. Desfazer Inserção
        historico.undo();
        console.log("Conte\u00FAdo Atual: \"".concat(meuDoc.getContent(), "\""));
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
