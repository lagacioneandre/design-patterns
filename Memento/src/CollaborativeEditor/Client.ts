import { Document } from "./Document";
import { VersionControl } from "./VersionControl";

class Client {
    execute() {
        const myDoc = new Document();
        const history = new VersionControl(myDoc);

        myDoc.setText("Hello");
        history.save(); // INSERT 'Hello' at 0

        myDoc.setText("Hello World");
        history.save(); // INSERT ' World' at 5

        myDoc.setText("Hello Brave World");
        history.save(); // INSERT 'Brave ' at 6

        myDoc.setText("Hello World");
        history.save(); // DELETE 'Brave ' at 6

        console.log("\n--- Current state ---");
        console.log(`Text: "${myDoc.getContent()}"`);

        console.log("\n--- STARTING UNDOS (REPLAY LOGIC) ---");

        // Undo 1: Should back to "Hello Brave World"
        history.undo();
        console.log(`Result: "${myDoc.getContent()}"`);

        // Undo 2: Should back to "Hello World"
        history.undo();
        console.log(`Result: "${myDoc.getContent()}"`);

        // Undo 3: Should back to "Hello"
        history.undo();
        console.log(`Result: "${myDoc.getContent()}"`);

        // Undo 4: Should back to "" (Vazio)
        history.undo();
        console.log(`Result: "${myDoc.getContent()}"`);
    }
}

(() => {
    new Client().execute();
})();