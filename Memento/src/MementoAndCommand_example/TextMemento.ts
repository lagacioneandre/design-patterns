/**
 * 1. O Memento Incremental
 * Ele continua sendo um objeto passivo que guarda o "antes".
 */

export type ActionType = 'INSERT' | 'DELETE' | 'UPDATE';

export class TextMemento {
    constructor(
        readonly type: ActionType,
        readonly index: number,
        readonly text: string,
    ) {}
}