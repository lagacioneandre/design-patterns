/**
 * Comando Concreto: Processar Dados.
 * Armazena o Receiver (API) e os parametros (dataId, transformType).
 */

import { Command } from "./command.interface";
import { DataProessorAPI } from "./DataProcessorAPI";

export class ProcessDataCommand implements Command {
    private receiver: DataProessorAPI;
    private dataId: string;
    private transformType: string;
    logMessage: string;

    constructor(receiver: DataProessorAPI, dataId: string, transformType: string) {
        this.receiver = receiver;
        this.dataId = dataId;
        this.transformType = transformType;
        this.logMessage = `Iniciado Processamento de ${dataId} (${transformType})`;
    }

    execute(): void {
        this.receiver.logActivity(this.logMessage);
        this.receiver.processData(this.dataId, this.transformType);
    }
}