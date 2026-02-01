// --- Codigo cliente: Demonstracao da fila de comandos ---

import { DataProessorAPI } from "./DataProcessorAPI";
import { GenerateReportCommand } from "./GenerateReportCommand";
import { ProcessDataCommand } from "./ProcessDataCommand";
import { TaskQueueProcessor } from "./TaskQueueProcessor";

function clientCode() {
    // 1. Iniciliza o Receiver (o executor da logica de negocio)
    const api = new DataProessorAPI();

    // 2. Inicializa o Invoker (o gerenciado da fila)
    const processor = new TaskQueueProcessor();

    // 3. O Cliente cria e enfileira comando em momentos diferentes

    // Criacao do comando 1: Processar
    const cmd1 = new ProcessDataCommand(api, 'DADOS_CLIENTE_123', 'Limpeza e normalizacao');
    processor.enqueueTask(cmd1);

    // Criacao do comando 2: Gerar relatorio
    const cmd2 = new GenerateReportCommand(api, 'Relatorio mensal', 'PDF');
    processor.enqueueTask(cmd2);

    // Criacao do comando 3: Processar
    const cmd3 = new ProcessDataCommand(api, 'DADOS_ESTOQUE_456', 'Agregacao');
    processor.enqueueTask(cmd3);

    // 4. Em algum momento posterior (assincrono), a fila 'e processada
    processor.processQueue();
}

clientCode();