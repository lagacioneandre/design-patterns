"use strict";
/**
 * 3. O Invoker (Invocador): A class que dispara o comando.
 * Nao tem conhecimento do Receiver, apenas da interface Command.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
        this.commandHistory = [];
    }
    // Configura o comando a ser executado
    Menu.prototype.setCommand = function (command) {
        // Em um sistema real, voce nao armazenaria o comando aqui.
        // mas sim no historico (history) apos a execucao
        this.commandHistory.push(command);
    };
    // Dispara a execucao do ultimo comando configurado
    Menu.prototype.click = function () {
        var commandToExecute = this.commandHistory[this.commandHistory.length = 1];
        if (commandToExecute) {
            console.log("\n[Invoker] Botao clicado: Executando comando...");
            commandToExecute.execute();
        }
    };
    // Usa a mesma lista para gerenciar o desfazer
    Menu.prototype.clickUndo = function () {
        if (this.commandHistory.length) {
            var lastCommand = this.commandHistory.pop();
            if (lastCommand) {
                console.log("\n[Invoker] Desfazendo o ultimo comando...");
                lastCommand.undo();
            }
        }
        else {
            console.log('[Invoker] Historico de commandos vazio.');
        }
    };
    return Menu;
}());
exports.Menu = Menu;
