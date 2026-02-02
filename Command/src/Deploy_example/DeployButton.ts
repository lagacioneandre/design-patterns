/**
 * O Invoker: Um simples botao que nao sabe nada sobre Deploy, Arquivos ou Banco de Dados.
 */

import { Command } from "./command.interface";

export class DeployButton {
    private command!: Command;

    setDeployCommand(command: Command) {
        this.command = command;
    }

    click() {
        if(!this.command) {
            console.log('Nenhum comando de deploy configurado.');
            return;
        }

        // O Invoker apenas chama o execute()
        this.command.execute();
    }
}