"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
var DatabaseConfig = /** @class */ (function () {
    function DatabaseConfig(data) {
        this.database = data.database;
        this.host = data.host;
        this.port = data.port;
        this.username = data.username;
        this.password = data.password;
        this.maxConnection = data.maxConnection;
        this.enablePooling = data.enablePooling;
        this.timeoutSeconds = data.timeoutSeconds;
    }
    DatabaseConfig.prototype.getDatabaseConfiguration = function () {
        console.log('\n\n === DATABASE CONFIGURATION ===');
        console.log("Database type : ".concat(this.database));
        console.log("Host : ".concat(this.host));
        console.log("Port number : ".concat(this.port));
        console.log("Username : ".concat(this.username));
        console.log("Password : ".concat(this.password));
        console.log("Max connections : ".concat(this.maxConnection));
        console.log("Is pooling enabled : ".concat(this.enablePooling ? 'Yes' : 'No'));
        console.log("Timeout seconds : ".concat(this.timeoutSeconds));
    };
    return DatabaseConfig;
}());
exports.DatabaseConfig = DatabaseConfig;
