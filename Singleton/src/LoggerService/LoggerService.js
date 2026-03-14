"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.logs = [];
        console.log('Iniciando registros de logs...');
    }
    LoggerService.getInstance = function () {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
        }
        else {
            console.log('Usando instancia ja criada.');
        }
        return LoggerService.instance;
    };
    LoggerService.prototype.addLog = function (log) {
        console.log('Adicionando novo log.');
        var timestamp = new Date().toISOString();
        this.logs.push("[".concat(timestamp, "] ").concat(log));
    };
    LoggerService.prototype.showLogs = function () {
        console.log('Imprimindo todos os logs: ', JSON.stringify(this.logs));
    };
    LoggerService.prototype.clearLogs = function () {
        console.log('Limpando todos os logs.');
        this.logs = [];
    };
    LoggerService.instance = null;
    return LoggerService;
}());
exports.LoggerService = LoggerService;
