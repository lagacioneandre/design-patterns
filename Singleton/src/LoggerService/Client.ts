import { LoggerService } from "./LoggerService";

class Client {
    private initializeLog!: LoggerService;
    private dbLog!: LoggerService;

    initialize() {
        this.initializeLog = LoggerService.getInstance();
        this.initializeLog.addLog('Iniciando o sistema...');
    }


    dbConnection() {
        this.dbLog = LoggerService.getInstance();
        this.dbLog.addLog('Conexao com banco de dados estabelecida.');
    }

    validate() {
        const logs = LoggerService.getInstance();
        logs.showLogs();
        console.log('Logs sao da mesma instancia?', this.initializeLog === this.dbLog); // true
    }
}

(() => {
    const client = new Client();
    client.initialize();
    client.dbConnection();
    client.validate();
})();