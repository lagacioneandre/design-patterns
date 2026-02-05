export interface ICommand {
    execte(): boolean;
    undo(): void;
}