"use strict";
// --- Codigo cliente: Demonstracao da fila de comandos ---
Object.defineProperty(exports, "__esModule", { value: true });
var DataProcessorAPI_1 = require("./DataProcessorAPI");
var GenerateReportCommand_1 = require("./GenerateReportCommand");
var ProcessDataCommand_1 = require("./ProcessDataCommand");
var TaskQueueProcessor_1 = require("./TaskQueueProcessor");
function clientCode() {
    // 1. Iniciliza o Receiver (o executor da logica de negocio)
    var api = new DataProcessorAPI_1.DataProessorAPI();
    // 2. Inicializa o Invoker (o gerenciado da fila)
    var processor = new TaskQueueProcessor_1.TaskQueueProcessor();
    // 3. O Cliente cria e enfileira comando em momentos diferentes
    // Criacao do comando 1: Processar
    var cmd1 = new ProcessDataCommand_1.ProcessDataCommand(api, 'DADOS_CLIENTE_123', 'Limpeza e normalizacao');
    processor.enqueueTask(cmd1);
    // Criacao do comando 2: Gerar relatorio
    var cmd2 = new GenerateReportCommand_1.GenerateReportCommand(api, 'Relatorio mensal', 'PDF');
    processor.enqueueTask(cmd2);
    // Criacao do comando 3: Processar
    var cmd3 = new ProcessDataCommand_1.ProcessDataCommand(api, 'DADOS_ESTOQUE_456', 'Agregacao');
    processor.enqueueTask(cmd3);
    // 4. Em algum momento posterior (assincrono), a fila 'e processada
    processor.processQueue();
}
clientCode();
