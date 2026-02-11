import { DeleteTextCommand } from "./DeleteTextCommand";
import { Document } from "./Document";
import { EditorHistory } from "./EditorHistory";
import { InsertTextCommand } from "./InsertTextCommand";

class Client {
    execute() {
        // const document = new Document();
        // const editorHistory = new EditorHistory();

        // const insert1 = new InsertTextCommand(document, 'Hoje a noite', 0);
        // editorHistory.setCommand(insert1);
        // insert1.execute();

        // const insert2 = new InsertTextCommand(document, ' aqui na cidade', 13);
        // editorHistory.setCommand(insert2);
        // insert2.execute();
        // editorHistory.undo();

        // const insert3 = new InsertTextCommand(document, ' aqui na selva, quem dorme e o leao.', 13);
        // editorHistory.setCommand(insert3);
        // insert3.execute();

        // const delete1 = new DeleteTextCommand(document, 0, 7);
        // editorHistory.setCommand(delete1);
        // delete1.execute();
        // editorHistory.undo();

        const meuDoc = new Document();
        const historico = new EditorHistory();

        // 1. Inserir Texto
        historico.executeCommand(new InsertTextCommand(meuDoc, "Olá", 0));
        historico.executeCommand(new InsertTextCommand(meuDoc, " Mundo", 3));
        console.log(`Conteúdo Atual: "${meuDoc.getContent()}"`);

        // 2. Deletar Texto
        historico.executeCommand(new DeleteTextCommand(meuDoc, 0, 3)); // Deleta "Olá"
        console.log(`Conteúdo Atual: "${meuDoc.getContent()}"`);

        // 3. Desfazer Deleção
        historico.undo();
        console.log(`Conteúdo Atual: "${meuDoc.getContent()}"`);

        // 4. Desfazer Inserção
        historico.undo();
        console.log(`Conteúdo Atual: "${meuDoc.getContent()}"`);

        // 5. Desfazer Inserção, removido "Ola" retorna conteudo vazio
        historico.undo();
        console.log(`Conteúdo Atual: "${meuDoc.getContent()}"`);

        // 6. Desfazer Inserção, historico vazio, nada para desfazer
        historico.undo();
        console.log(`Conteúdo Atual: "${meuDoc.getContent()}"`);
    }
}

(function() {
    new Client().execute();
})();