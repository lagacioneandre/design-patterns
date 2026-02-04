import { ICommand } from "./command.interface";

export class RobotControl {
    private history: ICommand[] = [];

    go(commandDirection: ICommand) {
        commandDirection.execute();
        this.history.push(commandDirection);
    }

    back() {
        const lastCommand = this.history.pop();
        if (!lastCommand) {
            console.log('The robot has not moved yet!');
            return;
        }

        lastCommand.undo();
    }
}