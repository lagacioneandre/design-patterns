import { ICommand } from "./command.interface";

export class StoreManager {
    private history: ICommand[] = [];

    process(command: ICommand) {
        const response = command.execute();
        if (response) this.history.push(command);
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