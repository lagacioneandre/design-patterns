/**
 * O Invoker: Processador de fila de tarefas.
 * Ele enfileira os comandos e os executa sequencialmente.
 * Garante que cada execucao é logada, sem saber o que cada comando faz.
 */

import { Command } from "./command.interface";

export class TaskQueueProcessor {
    private taskQueue: Command[] = [];

    enqueueTask(command: Command) {
        this.taskQueue.push(command);
        console.log(`[Queue] Tarefa adicionada ${command.logMessage}`);
    }

    processQueue() {
        console.log(`\n==========================================`);
        console.log(`[Queue] Iniciando processamento de ${this.taskQueue.length} tarefas...`);
        console.log(`==========================================`);

        // O Invoker itera e chama o execute()
        while (!!this.taskQueue.length) {
            const command = this.taskQueue.shift(); // Remove o obtem o primeiro da fila
            if (command) {
                // O Invoker nao sabe se 'e um ProcessDataCommand ou um GenerateReportCommand
                // Apenas confia que o metodo execute fara o trabalho.
                command.execute();
            }
        }

        console.log(`==========================================`);
        console.log("[Queue] Processamento concluído.");
    }
}