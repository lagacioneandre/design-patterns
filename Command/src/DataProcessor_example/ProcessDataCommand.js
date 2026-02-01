"use strict";
/**
 * Comando Concreto: Processar Dados.
 * Armazena o Receiver (API) e os parametros (dataId, transformType).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDataCommand = void 0;
var ProcessDataCommand = /** @class */ (function () {
    function ProcessDataCommand(receiver, dataId, transformType) {
        this.receiver = receiver;
        this.dataId = dataId;
        this.transformType = transformType;
        this.logMessage = "Iniciado Processamento de ".concat(dataId, " (").concat(transformType, ")");
    }
    ProcessDataCommand.prototype.execute = function () {
        this.receiver.logActivity(this.logMessage);
        this.receiver.processData(this.dataId, this.transformType);
    };
    return ProcessDataCommand;
}());
exports.ProcessDataCommand = ProcessDataCommand;
