/**
 * 2. A Interface Command
 * O comando agora é responsável por executar a lógica e guardar o memento gerado.
 */

export interface Command {
    execute(): void;
    undo(): void;
}