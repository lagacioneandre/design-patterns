"use strict";
/**
 * O Receiver: A API que executa as operacoes de processamento de relatorio.
 * O Invoker nao tera conhecimento direto desta classe.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProessorAPI = void 0;
var DataProessorAPI = /** @class */ (function () {
    function DataProessorAPI() {
    }
    DataProessorAPI.prototype.processData = function (dataId, transformType) {
        console.log("[API] Processando dados ID: ".concat(dataId, " com transformacao: ").concat(transformType));
        // simula uma operacao complexa que leva tempo
        // ... Logica de ETL real ...
    };
    DataProessorAPI.prototype.generateReport = function (reportName, format) {
        console.log("[API] Gerando relatorio \"".concat(reportName, "\" o formato ").concat(format));
        // Logica de geracao de PDF ou JSON ...
    };
    DataProessorAPI.prototype.logActivity = function (message) {
        var timestamp = new Date().toLocaleTimeString();
        console.log("[LOG] [".concat(timestamp, "] ").concat(message));
    };
    return DataProessorAPI;
}());
exports.DataProessorAPI = DataProessorAPI;
