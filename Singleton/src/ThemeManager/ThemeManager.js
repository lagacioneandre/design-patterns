"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeManager = void 0;
var ThemeManager = /** @class */ (function () {
    function ThemeManager() {
        console.log("ThemeManager instanciado via Eager Initialization.");
        this.currentTheme = 'light';
    }
    ThemeManager.getInstance = function () {
        return ThemeManager.INSTANCE;
    };
    ThemeManager.prototype.setTheme = function (theme) {
        this.currentTheme = theme;
    };
    ThemeManager.prototype.getTheme = function () {
        return this.currentTheme;
    };
    ThemeManager.prototype.isDarkMode = function () {
        return this.currentTheme === 'dark';
    };
    ThemeManager.INSTANCE = new ThemeManager();
    return ThemeManager;
}());
exports.ThemeManager = ThemeManager;
