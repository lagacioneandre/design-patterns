"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseConnection_1 = require("./DatabaseConnection");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        console.log('Aplicacao iniciada...');
        // A conexao NAO existe aqui ainda.
        // ... passamos muito tempo fazendo outra coisa
        console.log('Precisamos salvar um log no banco...');
        var db1 = DatabaseConnection_1.DatabaseConnection.getInstance(); // A instancia 'e criada AQUI.
        db1.query('SELECT * FROM users');
        var db2 = DatabaseConnection_1.DatabaseConnection.getInstance(); // Apenas retorna a instancia pronta.
        db2.query('DELETE FROM sessions');
        console.log('As instancias sao iguais?', db1 === db2); // true
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
