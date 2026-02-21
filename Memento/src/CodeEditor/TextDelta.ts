export type Action = 'DELETE' | 'INSERT' | 'UPDATE';

export type Status = {
    action: Action;
    index: number;
    prevValue: string;
}

export class TextDelta {
    constructor(
        private readonly action: Action,
        private readonly index: number,
        private readonly prevValue: string,
    ) {}

    getStatus(): Status {
        return {
            action: this.action,
            index: this.index,
            prevValue: this.prevValue,
        }
    }
}