"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThemeManager_1 = require("./ThemeManager");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var manager1 = ThemeManager_1.ThemeManager.getInstance();
        console.log("Tema atual: ".concat(manager1.getTheme()));
        manager1.setTheme('dark');
        var manager2 = ThemeManager_1.ThemeManager.getInstance();
        console.log('O tema atal e o dark?', manager2.isDarkMode());
        console.log('As instancias de manager sao iguais?', manager1 === manager2);
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
