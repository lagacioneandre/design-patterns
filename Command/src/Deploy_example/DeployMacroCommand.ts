/**
 * COMANDO MACRO: Deploy Command
 * Orquestra uma sequencia de acoes que envolve multiplos receivers.
 */

import { Command } from "./command.interface";
import { Database } from "./Database";
import { FileSystem } from "./FileSystem";
import { Notifier } from "./Notifier";

export class DeployMacroCommand implements Command {
    // Referencia aos tres receivers
    private fileSystem: FileSystem;
    private database: Database;
    private notifier: Notifier;

    // Parametros necessarios para a acao
    private deployVersion: number;
    private targetPath: string;

    constructor (
        fs: FileSystem,
        db: Database,
        n: Notifier,
        version: number,
        path: string
    ) {
        this.fileSystem = fs;
        this.database = db;
        this.notifier = n;
        this.deployVersion = version;
        this.targetPath = path;
    }

    /**
     * O metodo execute() agora define o fluxo de trabalho completo.
    */
    execute(): void {
        console.log("------------------------------------------");
        console.log(`[COMANDO DEPLOY] 🚀 Iniciando Deploy v${this.deployVersion}...`);
        console.log("------------------------------------------");

        let success = false;

        try {
            // PASSO 1: Interagir com o sistema de arquivos (Receiver 1)
            const copySuccess = this.fileSystem.copyFiles('./source/build', this.targetPath);

            if (copySuccess) {
                // PASSO 2: Interagir com o banco de dados (Receiver 2)
                this.database.runMigrations(this.deployVersion);

                // Se ambos os passos acima tiveram sucesso, a transacao foi bem sucedida
                success = true;
            }
        } catch (error) {
            console.log('[COMANDO DEPLOY] ERRO durante a execucao!!');
            // Em um cenario real voce faria um rollback aqui.
        } finally {
            // PASO 3: Interagir com o Notificador (Receiver 3) - Ocorre sempre
            if (success) {
                this.notifier.sendEmail('equipe@dev', `Deploy v${this.deployVersion} CONCLUIDO com sucesso!`);
            } else {
                this.notifier.sendEmail('equipe@dev', `Deploy v${this.deployVersion} FALHOU. Verifique os logs.`)
            }
        }

        console.log("------------------------------------------");
        console.log(`[COMANDO DEPLOY] 🏁 Execução do Comando Finalizada.`);
    }
}