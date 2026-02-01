"use strict";
/**
 * Comando Concreto: Gerar relatorio.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateReportCommand = void 0;
var GenerateReportCommand = /** @class */ (function () {
    function GenerateReportCommand(receiver, reportName, format) {
        this.receiver = receiver;
        this.reportName = reportName;
        this.format = format;
        this.logMessage = "Solicitada Geracao do Relatorio: '".concat(reportName, "' em ").concat(format);
    }
    GenerateReportCommand.prototype.execute = function () {
        this.receiver.logActivity(this.logMessage);
        this.receiver.generateReport(this.reportName, this.format);
    };
    return GenerateReportCommand;
}());
exports.GenerateReportCommand = GenerateReportCommand;
