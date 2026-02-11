// import { Command } from "./command.interface";

// export class EditorHistory {
//     private commandHistory: Command[] = [];

//     setCommand(command: Command) {
//         this.commandHistory.push(command);
//     }

//     undo() {
//         if (this.commandHistory.length) {
//             const lastCommand = this.commandHistory.pop();
//             if (lastCommand) {
//                 console.log(`\n[Invoker] Desfazendo o ultimo comando...`);
//                 lastCommand.undo();
//             } else {
//                 console.log('[Invoker] Historico de commandos vazio.');
//             }
//         }
//     }
// }

import { Command } from "./command.interface";

export class EditorHistory {
    private history: Command[] = [];

    executeCommand(command: Command) {
        command.execute();
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            console.log(`\n[Invoker] Desfazendo último comando...`);
            command.undo();
        } else {
            console.log('[Invoker] Nada para desfazer.');
        }
    }
}