/**
 * 5. O Invocador / Caretaker (EditorInvoker)
 * Este é o cérebro da arquitetura. Ele gerencia o Undo e o Redo.
 */

import { Command } from "./command.interface";

export class EditorInvoker {
    private undoStack: Command[] = [];
    private redoStack: Command[] = [];

    executeCommand(command: Command) {
        command.execute();
        this.undoStack.push(command);
        this.redoStack = []; // Limpa o redo quando uma noca acao 'e feita
    }

    undo() {
        const command = this.undoStack.pop();
        if (command) {
            command.undo();
            this.redoStack.push(command);
        }
    }

    redo() {
        const command = this.redoStack.pop();
        if (command) {
            command.execute();
            this.undoStack.push(command);
        }
    }
}