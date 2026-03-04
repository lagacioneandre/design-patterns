import { SettingsMemento } from "./SettingsMemento";
import { UserSettings } from "./UserSettings";

export class SettingsHistory {
    private history: SettingsMemento;

    constructor(private userSettings: UserSettings) {
        this.history = userSettings.save();
    }

    save() {
        this.history = this.userSettings.save();
    }

    cancel() {
        this.userSettings.restore(this.history);
    }
}