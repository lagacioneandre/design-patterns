/**
 * 1. Interface Command: Declara o metodo de execucao
 */

export interface Command {
    execute(): void;
    undo(): void; // adicionamos 'undo' para suportar a funcionalidade de desfazer
}