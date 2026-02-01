/**
 * O Receiver: A API que executa as operacoes de processamento de relatorio.
 * O Invoker nao tera conhecimento direto desta classe.
 */

export class DataProessorAPI {
    processData(dataId: string, transformType: string) {
        console.log(`[API] Processando dados ID: ${dataId} com transformacao: ${transformType}`);
        // simula uma operacao complexa que leva tempo
        // ... Logica de ETL real ...
    }

    generateReport(reportName: string, format: string) {
        console.log(`[API] Gerando relatorio "${reportName}" o formato ${format}`);
        // Logica de geracao de PDF ou JSON ...
    }

    logActivity(message: string) {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[LOG] [${timestamp}] ${message}`);
    }
}