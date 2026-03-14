export class LoggerService {
    private logs: string[] = [];
    private static instance: LoggerService | null = null;

    private constructor() {
        console.log('Iniciando registros de logs...');
    }

    static getInstance(): LoggerService {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
        } else {
            console.log('Usando instancia ja criada.');
        }

        return LoggerService.instance;
    }

    addLog(log: string) {
        console.log('Adicionando novo log.');
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${log}`);
    }

    showLogs() {
        console.log('Imprimindo todos os logs: ', JSON.stringify(this.logs));
    }

    clearLogs() {
        console.log('Limpando todos os logs.');
        this.logs = [];
    }
}