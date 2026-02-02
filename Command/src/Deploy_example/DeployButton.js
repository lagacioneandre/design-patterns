"use strict";
/**
 * O Invoker: Um simples botao que nao sabe nada sobre Deploy, Arquivos ou Banco de Dados.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployButton = void 0;
var DeployButton = /** @class */ (function () {
    function DeployButton() {
    }
    DeployButton.prototype.setDeployCommand = function (command) {
        this.command = command;
    };
    DeployButton.prototype.click = function () {
        if (!this.command) {
            console.log('Nenhum comando de deploy configurado.');
            return;
        }
        // O Invoker apenas chama o execute()
        this.command.execute();
    };
    return DeployButton;
}());
exports.DeployButton = DeployButton;
