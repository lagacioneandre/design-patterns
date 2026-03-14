"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerService_1 = require("./LoggerService");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.initialize = function () {
        this.initializeLog = LoggerService_1.LoggerService.getInstance();
        this.initializeLog.addLog('Iniciando o sistema...');
    };
    Client.prototype.dbConnection = function () {
        this.dbLog = LoggerService_1.LoggerService.getInstance();
        this.dbLog.addLog('Conexao com banco de dados estabelecida.');
    };
    Client.prototype.validate = function () {
        var logs = LoggerService_1.LoggerService.getInstance();
        logs.showLogs();
        console.log('Logs sao da mesma instancia?', this.initializeLog === this.dbLog); // true
    };
    return Client;
}());
(function () {
    var client = new Client();
    client.initialize();
    client.dbConnection();
    client.validate();
})();
