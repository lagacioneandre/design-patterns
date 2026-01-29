import { ICommand } from "./command.interface";

export class Calculator {
    private history: ICommand[] = [];
    
    execute(command: ICommand) {
        command.execute();
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        if (!command) {
            console.log('Any operation was executed at the moment!');
            return;
        }

        command.undo();
    }
}