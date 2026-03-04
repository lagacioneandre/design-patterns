"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettingsHistory_1 = require("./SettingsHistory");
var UserSettings_1 = require("./UserSettings");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var userSettings = new UserSettings_1.UserSettings();
        var settingsHistory = new SettingsHistory_1.SettingsHistory(userSettings);
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
    };
    Client.prototype.print = function (params) {
        var fontSize = params.fontSize, theme = params.theme, notifications = params.notifications;
        console.log("\n            User settings: Font size: ".concat(fontSize, ", theme: ").concat(theme, ", notifications: ").concat(notifications, "    \n        "));
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
