import { HistoryCaretaker } from "./HistoryCaretaker";
import { TextEditor } from "./TextEditor";

class Client {
    execute() {
        const editor = new TextEditor();
        const history = new HistoryCaretaker(editor);

        editor.type('Hello ');
        history.backup(); // Saves 'Hello '

        editor.type('World!');
        history.backup(); // Saves 'World!'

        editor.type(' This should be deleted.');
        console.log(`Current content: ${editor.getContent()}`);

        history.undo(); // Goes back to 'Hello World!'
        console.log(`After Undo: ${editor.getContent()}`);

        history.undo(); // Goes back to 'Hello '
        console.log(`After Second Undo: ${editor.getContent()}`);
    }
}

(() => {
    new Client().execute();
})();

/**
 * Pros
 * Encapsulation: The internal state of the Originator stays hidden.
 * Simplified Originator: The Originator doesn't need to manage history, only save/load.
 * Atomic Restores: You either restore the whole state or nothing.
 * 
 * Cons
 * Memory usage: If the state is huge and you save often, RAM usage explodes.
 * Lifecycle Management: The Caretaker must track the Originator's lifecycle to avoid memory leaks.
 * Performance: Copying large objects for every "save" can be slow.
 */