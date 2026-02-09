import { ICommand } from "./command.interface";

export class SmartRemote {
    private history: ICommand[] = [];

    pressButton(command: ICommand) {
        const response = command.execute();
        if (response) this.history.push(command);
    }

    pressUndo() {
        const command = this.history.pop();
        if (!command) {
            console.log('No commands to undo!');
            return;
        }
        
        command.undo();
    }
}