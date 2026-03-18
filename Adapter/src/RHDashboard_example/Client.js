"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirectoryAdapter_1 = require("./DirectoryAdapter");
var LegacyDirectorySystem_1 = require("./LegacyDirectorySystem");
var Client = /** @class */ (function () {
    function Client(userProvider) {
        this.userProvider = userProvider;
    }
    Client.prototype.renderUserCard = function (id) {
        var user = this.userProvider.fetchUser(id);
        console.log('--- Card de usuario ---');
        console.log("Nome: ".concat(user.fullName));
        console.log("Email: ".concat(user.email));
        console.log("Permissoes: ".concat(user.roles.join(' | ')));
    };
    return Client;
}());
(function () {
    // Setup
    var legacy = new LegacyDirectorySystem_1.LegacyDirectorySystem();
    var adapter = new DirectoryAdapter_1.DirectoryAdapter(legacy);
    var dashboard = new Client(adapter);
    dashboard.renderUserCard('123');
})();
