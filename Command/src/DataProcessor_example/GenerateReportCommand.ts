/**
 * Comando Concreto: Gerar relatorio.
 */

import { Command } from "./command.interface";
import { DataProessorAPI } from "./DataProcessorAPI";

export class GenerateReportCommand implements Command {
    private receiver: DataProessorAPI;
    private reportName: string;
    private format: string;
    logMessage: string;

    constructor(receiver: DataProessorAPI, reportName: string, format: string) {
        this.receiver = receiver;
        this.reportName = reportName;
        this.format = format;
        this.logMessage = `Solicitada Geracao do Relatorio: '${reportName}' em ${format}`;
    }

    execute(): void {
        this.receiver.logActivity(this.logMessage);
        this.receiver.generateReport(this.reportName, this.format);
    }
}