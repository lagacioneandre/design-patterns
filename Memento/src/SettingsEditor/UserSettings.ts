import { Settings, Theme } from "./settings.type";
import { SettingsMemento } from "./SettingsMemento";

export class UserSettings {
    private fontSize = 12;
    private theme: Theme = 'light';
    private notifications = true;

    setFontSize(size: number) {
        this.fontSize = size;
    }

    setTheme(theme: Theme) {
        this.theme = theme;
    }

    setNotifications(notifications: boolean) {
        this.notifications = notifications;
    }

    getSettings(): Settings {
        return {
            fontSize: this.fontSize,
            theme: this.theme,
            notifications: this.notifications,
        }
    }

    save() {
        return new SettingsMemento(this.getSettings());
    }

    restore(memento: SettingsMemento) {
        const { fontSize, theme, notifications } = memento.settings;
        this.fontSize = fontSize;
        this.theme = theme;
        this.notifications = notifications;
    }
}