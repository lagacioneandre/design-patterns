import { Settings } from "./settings.type";
import { SettingsHistory } from "./SettingsHistory";
import { UserSettings } from "./UserSettings";

class Client {
    execute() {
        const userSettings = new UserSettings();
        const settingsHistory = new SettingsHistory(userSettings);

        userSettings.setFontSize(18);
        userSettings.setTheme('dark');
        userSettings.setNotifications(false);
        this.print(userSettings.getSettings()); // fontSise 18, theme dark, notifications false
        settingsHistory.cancel();
        this.print(userSettings.getSettings()); // fontSise 12, theme light, notifications true

        userSettings.setFontSize(22);
        userSettings.setTheme('dark');
        userSettings.setNotifications(false);
        this.print(userSettings.getSettings()); // fontSise 22, theme dark, notifications false
        settingsHistory.save();
        this.print(userSettings.getSettings()); // fontSise 22, theme dark, notifications false

    }

    private print(params: Settings) {
        const { fontSize, theme, notifications } = params;
        console.log(`
            User settings: Font size: ${fontSize}, theme: ${theme}, notifications: ${notifications}    
        `);
    }
}

(() => {
    new Client().execute();
})();