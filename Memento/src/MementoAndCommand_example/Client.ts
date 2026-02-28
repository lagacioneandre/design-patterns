import { EditorInvoker } from "./EditorInvoker";
import { InsertCommand } from "./InsertCommand";
import { TextDocument } from "./TextDocument";

class Client {
    execute() {
        const myDoc = new TextDocument();
        const invoker = new EditorInvoker();

        // 1. Inserir Linha
        const insert1 = new InsertCommand(myDoc, 'Primeira linha');
        invoker.executeCommand(insert1);
        myDoc.print(); // ['Primeira linha']

        // 2. Inserir outra
        const insert2 = new InsertCommand(myDoc, 'Segunda linha');
        invoker.executeCommand(insert2);
        myDoc.print(); // ['Primeira linha', 'Segunda linha']

        // 3. Undo
        console.log('--- Desfazendo ---');
        invoker.undo();
        myDoc.print(); // ['Primeira linha']

        // 4. Redo
        console.log(' --- Refazendo ---');
        invoker.redo();
        myDoc.print(); // ['Primeira linha', 'Segunda linha']
    }
}

(() => {
    new Client().execute();
})();