import { Settings } from "./settings.type";

export class SettingsMemento {
    constructor(readonly settings: Settings) {}
}