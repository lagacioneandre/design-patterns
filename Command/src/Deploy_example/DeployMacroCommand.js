"use strict";
/**
 * COMANDO MACRO: Deploy Command
 * Orquestra uma sequencia de acoes que envolve multiplos receivers.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployMacroCommand = void 0;
var DeployMacroCommand = /** @class */ (function () {
    function DeployMacroCommand(fs, db, n, version, path) {
        this.fileSystem = fs;
        this.database = db;
        this.notifier = n;
        this.deployVersion = version;
        this.targetPath = path;
    }
    /**
     * O metodo execute() agora define o fluxo de trabalho completo.
    */
    DeployMacroCommand.prototype.execute = function () {
        console.log("------------------------------------------");
        console.log("[COMANDO DEPLOY] \uD83D\uDE80 Iniciando Deploy v".concat(this.deployVersion, "..."));
        console.log("------------------------------------------");
        var success = false;
        try {
            // PASSO 1: Interagir com o sistema de arquivos (Receiver 1)
            var copySuccess = this.fileSystem.copyFiles('./source/build', this.targetPath);
            if (copySuccess) {
                // PASSO 2: Interagir com o banco de dados (Receiver 2)
                this.database.runMigrations(this.deployVersion);
                // Se ambos os passos acima tiveram sucesso, a transacao foi bem sucedida
                success = true;
            }
        }
        catch (error) {
            console.log('[COMANDO DEPLOY] ERRO durante a execucao!!');
            // Em um cenario real voce faria um rollback aqui.
        }
        finally {
            // PASO 3: Interagir com o Notificador (Receiver 3) - Ocorre sempre
            if (success) {
                this.notifier.sendEmail('equipe@dev', "Deploy v".concat(this.deployVersion, " CONCLUIDO com sucesso!"));
            }
            else {
                this.notifier.sendEmail('equipe@dev', "Deploy v".concat(this.deployVersion, " FALHOU. Verifique os logs."));
            }
        }
        console.log("------------------------------------------");
        console.log("[COMANDO DEPLOY] \uD83C\uDFC1 Execu\u00E7\u00E3o do Comando Finalizada.");
    };
    return DeployMacroCommand;
}());
exports.DeployMacroCommand = DeployMacroCommand;
