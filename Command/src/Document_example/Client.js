"use strict";
// --- Codigo cliente: Demonstracao do uso ---
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteCommand_1 = require("./DeleteCommand");
var Document_1 = require("./Document");
var InsertCommand_1 = require("./InsertCommand");
var Menu_1 = require("./Menu");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // 1. Inicializa o Receiver (Documento)
        var document = new Document_1.Document('O sol brilha.');
        // 2. Inicializa o Invoker (Menu da aplicacao)
        var menu = new Menu_1.Menu();
        // --- Acao 1: Insercao ---
        // O Cliente cria o comando, ligando o receiver e os parametros.
        var insertCommand = new InsertCommand_1.InsertCommand(document, 'forte ', 8); // sol forte brilha
        // o Cliente associa o comando ao invoker (como se o usuario clicasse)
        menu.setCommand(insertCommand);
        // o Invoker executa
        menu.click();
        console.log("Conteudo atual: \"".concat(document.getContent(), "\""));
        // --- Acao 2: Delecao ---
        // O Cliente cria outro comando
        var deleteCommand = new DeleteCommand_1.DeleteCommand(document, 0, 2); // Deleta "O "
        // O Client associa e executa
        menu.setCommand(deleteCommand);
        menu.click();
        console.log("Conteudo atual: \"".concat(document.getContent(), "\""));
        // --- Acao 3: Desfazer ---
        // O Invoker agora dispara o undo
        menu.clickUndo(); // Desfaz a delecao
        console.log("Conteudo apos o UNDO: \"".concat(document.getContent(), "\""));
        menu.clickUndo(); // Desfaz a insercao
        console.log("Conteudo apos o segundo UNDO: \"".concat(document.getContent(), "\""));
    };
    return Client;
}());
(function () {
    {
        new Client().execute();
    }
})();
