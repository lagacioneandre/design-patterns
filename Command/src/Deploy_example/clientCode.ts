// --- Codigo Cliente: Configuracao e Execucao ---

import { Database } from "./Database";
import { DeployButton } from "./DeployButton";
import { DeployMacroCommand } from "./DeployMacroCommand";
import { FileSystem } from "./FileSystem";
import { Notifier } from "./Notifier";

function cilentCode() {
    console.log('--- Configurando o sistema de deploy ---');

    // 1. Inicializa os Receivers (Os objetos de negocio)
    const fileSystem = new FileSystem();
    const database = new Database();
    const notifier = new Notifier();

    // 2. Cria o Macro Comando (Macro Command)
    // O Cliente injeta todos os Receivers e parametros
    const macroCommand = new DeployMacroCommand(
        fileSystem,
        database,
        notifier,
        2.5,
        '/var/www/app-v2.5'
    );

    // 3. Inicializa o Invoker (O botao que o usuario vai clicar)
    const deployButton = new DeployButton();

    // 4. O Cliente liga o Comando ao Invoker
    deployButton.setDeployCommand(macroCommand);

    console.log('\n --- Usuario clica no botao de deploy ---\n');

    // 5. O Invoker executa o comando (acionando a sequencia nos 3 Receivers)
    deployButton.click();
}

cilentCode();