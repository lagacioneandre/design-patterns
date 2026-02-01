"use strict";
/**
 * O Invoker: Processador de fila de tarefas.
 * Ele enfileira os comandos e os execita sequencialmente.
 * Garante que cada execucao e logada, sem saber o que cada comando faz.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueueProcessor = void 0;
var TaskQueueProcessor = /** @class */ (function () {
    function TaskQueueProcessor() {
        this.taskQueue = [];
    }
    TaskQueueProcessor.prototype.enqueueTask = function (command) {
        this.taskQueue.push(command);
        console.log("[Queue] Tarefa adicionada ".concat(command.logMessage));
    };
    TaskQueueProcessor.prototype.processQueue = function () {
        console.log("\n==========================================");
        console.log("[Queue] Iniciando processamento de ".concat(this.taskQueue.length, " tarefas..."));
        console.log("==========================================");
        // O Invoker itera e chama o execute()
        while (!!this.taskQueue.length) {
            var command = this.taskQueue.shift(); // Remove o obtem o primeiro da fila
            if (command) {
                // O Invoker nao sabe se 'e um ProcessDataCommand ou um GenerateReportCommand
                // Apenas confia que o metodo execute fara o trabalho.
                command.execute();
            }
        }
        console.log("==========================================");
        console.log("[Queue] Processamento concluído.");
    };
    return TaskQueueProcessor;
}());
exports.TaskQueueProcessor = TaskQueueProcessor;
