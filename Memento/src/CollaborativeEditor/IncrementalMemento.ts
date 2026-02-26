export type Action = 'INSERT' | 'DELETE';

export type Details = {
    action: Action;
    index: number;
    text: string;
}

export class IncrementalMemento {
    private readonly action: Action;
    private readonly index: number;
    private readonly text: string;

    constructor (action: Action, index: number, text: string) {
        this.action = action;
        this.index = index;
        this.text = text;
    }

    getDetails(): Details {
        return {
            action: this.action,
            index: this.index,
            text: this.text,
        }
    }
}