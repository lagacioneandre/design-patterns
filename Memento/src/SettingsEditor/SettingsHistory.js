"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsHistory = void 0;
var SettingsHistory = /** @class */ (function () {
    function SettingsHistory(userSettings) {
        this.userSettings = userSettings;
        this.history = userSettings.save();
    }
    SettingsHistory.prototype.save = function () {
        this.history = this.userSettings.save();
    };
    SettingsHistory.prototype.cancel = function () {
        this.userSettings.restore(this.history);
    };
    return SettingsHistory;
}());
exports.SettingsHistory = SettingsHistory;
