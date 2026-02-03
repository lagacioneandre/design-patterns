/**
 * 3. O Invoker (Invocador): A class que dispara o comando.
 * Nao tem conhecimento do Receiver, apenas da interface Command.
 */

import { Command } from "./command.interface";

export class Menu {
    private commandHistory: Command[] = [];

    // Configura o comando a ser executado
    setCommand(command: Command) {
        // Em um sistema real, voce nao armazenaria o comando aqui.
        // mas sim no historico (history) apos a execucao
        this.commandHistory.push(command);
    }

    // Dispara a execucao do ultimo comando configurado
    click() {
        const commandToExecute = this.commandHistory[this.commandHistory.length - 1];
        if (commandToExecute) {
            console.log(`\n[Invoker] Botao clicado: Executando comando...`);
            commandToExecute.execute();
        }
    }

    // Usa a mesma lista para gerenciar o desfazer
    clickUndo() {
        if (this.commandHistory.length) {
            const lastCommand = this.commandHistory.pop();
            if (lastCommand) {
                console.log(`\n[Invoker] Desfazendo o ultimo comando...`);
                lastCommand.undo();
            }
        } else {
            console.log('[Invoker] Historico de commandos vazio.')
        }
    }
}