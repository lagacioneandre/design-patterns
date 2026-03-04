"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettings = void 0;
var SettingsMemento_1 = require("./SettingsMemento");
var UserSettings = /** @class */ (function () {
    function UserSettings() {
        this.fontSize = 12;
        this.theme = 'light';
        this.notifications = true;
    }
    UserSettings.prototype.setFontSize = function (size) {
        this.fontSize = size;
    };
    UserSettings.prototype.setTheme = function (theme) {
        this.theme = theme;
    };
    UserSettings.prototype.setNotifications = function (notifications) {
        this.notifications = notifications;
    };
    UserSettings.prototype.getSettings = function () {
        return {
            fontSize: this.fontSize,
            theme: this.theme,
            notifications: this.notifications,
        };
    };
    UserSettings.prototype.save = function () {
        return new SettingsMemento_1.SettingsMemento(this.getSettings());
    };
    UserSettings.prototype.restore = function (memento) {
        var _a = memento.settings, fontSize = _a.fontSize, theme = _a.theme, notifications = _a.notifications;
        this.fontSize = fontSize;
        this.theme = theme;
        this.notifications = notifications;
    };
    return UserSettings;
}());
exports.UserSettings = UserSettings;
