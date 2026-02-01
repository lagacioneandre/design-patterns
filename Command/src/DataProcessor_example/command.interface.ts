/**
 * Interface Command: Define a operacao fundamental 'execute'.
 * Nao precisamos de 'undo' neste cenario.
 */

export interface Command {
    execute(): void;
    logMessage: string;
}