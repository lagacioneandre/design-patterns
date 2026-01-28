// export interface Command {
//     execute(amount: number): void;
//     undo(): void;
// }

export interface Command {
    execute(): void;
    undo(): void;
}