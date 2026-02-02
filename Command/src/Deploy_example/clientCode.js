"use strict";
// --- Codigo Cliente: Configuracao e Execucao ---
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = require("./Database");
var DeployButton_1 = require("./DeployButton");
var DeployMacroCommand_1 = require("./DeployMacroCommand");
var FileSystem_1 = require("./FileSystem");
var Notifier_1 = require("./Notifier");
function cilentCode() {
    console.log('--- Configurando o sistema de deploy ---');
    // 1. Inicializa os Receivers (Os objetos de negocio)
    var fileSystem = new FileSystem_1.FileSystem();
    var database = new Database_1.Database();
    var notifier = new Notifier_1.Notifier();
    // 2. Cria o Macro Comando (Macro Command)
    // O Cliente injeta todos os Receivers e parametros
    var macroCommand = new DeployMacroCommand_1.DeployMacroCommand(fileSystem, database, notifier, 2.5, '/var/www/app-v2.5');
    // 3. Inicializa o Invoker (O botao que o usuario vai clicar)
    var deployButton = new DeployButton_1.DeployButton();
    // 4. O Cliente liga o Comando ao Invoker
    deployButton.setDeployCommand(macroCommand);
    console.log('\n --- Usuario clica no botao de deploy ---\n');
    // 5. O Invoker executa o comando (acionando a sequencia nos 3 Receivers)
    deployButton.click();
}
cilentCode();
