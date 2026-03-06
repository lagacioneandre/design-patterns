import { Mode, ThermostatMemento } from "./ThermostatMemento";

export class Thermostat {
    private temperature!: number;
    private mode!: Mode;

    setSettings(temparature: number, mode: Mode) {
        console.log(`Setting temperature to ${temparature} and mode to ${mode}`);
        this.temperature = temparature;
        this.mode = mode;
    }

    save() {
        console.log('Saving settings...');
        return new ThermostatMemento(this.temperature, this.mode);
    }

    restore(memento: ThermostatMemento) {
        const status = memento.getStatus();
        this.temperature = status.temperature;
        this.mode = status.mode;
        console.log(`Settings changed, temperature to ${this.temperature} and mode to ${this.mode}`);
    }
}