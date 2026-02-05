import { ICommand } from "./command.interface";

export class FileManager {
    private history: ICommand[] = [];

    execute(command: ICommand) {
        const isOperationSuccess = command.execte();
        if (isOperationSuccess) this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        if (!command) {
            console.log('No commands to undo!');
            return;
        }

        command.undo();
    }
}