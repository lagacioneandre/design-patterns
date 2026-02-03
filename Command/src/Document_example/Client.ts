// --- Codigo cliente: Demonstracao do uso ---

import { DeleteCommand } from "./DeleteCommand";
import { Document } from "./Document";
import { InsertCommand } from "./InsertCommand";
import { Menu } from "./Menu";

class Client {
    execute() {
        // 1. Inicializa o Receiver (Documento)
        const document = new Document('O sol brilha.');
        // 2. Inicializa o Invoker (Menu da aplicacao)
        const menu = new Menu();

        // --- Acao 1: Insercao ---
        // O Cliente cria o comando, ligando o receiver e os parametros.
        const insertCommand = new InsertCommand(document, 'forte ', 8); // sol forte brilha

        // o Cliente associa o comando ao invoker (como se o usuario clicasse)
        menu.setCommand(insertCommand);

        // o Invoker executa
        menu.click();
        console.log(`Conteudo atual: "${document.getContent()}"`);

        // --- Acao 2: Delecao ---
        // O Cliente cria outro comando
        const deleteCommand = new DeleteCommand(document, 0, 2); // Deleta "O "

        // O Client associa e executa
        menu.setCommand(deleteCommand);
        menu.click();
        console.log(`Conteudo atual: "${document.getContent()}"`);

        // --- Acao 3: Desfazer ---
        // O Invoker agora dispara o undo
        menu.clickUndo(); // Desfaz a delecao
        console.log(`Conteudo apos o UNDO: "${document.getContent()}"`);

        menu.clickUndo(); // Desfaz a insercao
        console.log(`Conteudo apos o segundo UNDO: "${document.getContent()}"`);
    }
}

(function () {{
    new Client().execute();
}})();