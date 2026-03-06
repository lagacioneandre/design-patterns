export type Mode = 'Heat' | 'Cool' | 'Eco';

export type Status = {
    temperature: number;
    mode: Mode;
}

export class ThermostatMemento {
    private readonly temperature: number;
    private readonly mode: Mode;

    constructor (temparature: number, mode: Mode) {
        this.temperature = temparature;
        this.mode = mode;
    }

    getStatus() {
        return {
            temperature: this.temperature,
            mode: this.mode,
        }
    }
}