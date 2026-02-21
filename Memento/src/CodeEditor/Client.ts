import { EditorHistory } from "./EditorHistory";
import { TextDocument } from "./TextDocument";

class Client {
    execute() {
        const document = new TextDocument();
        const history = new EditorHistory(document);
        
        history.save(document.addLine('Line 1')); // Line 1
        history.save(document.addLine('Line 2')); // Line 1, Line 2
        history.save(document.editLine(0, 'Line 1 modified')); // Line 1 modified, Line 2
        history.undo(); // Line 1, Line 2
        history.undo(); // Line 1
    }
}

(() => {
    new Client().execute();
})();