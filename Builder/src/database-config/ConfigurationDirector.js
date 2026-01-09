"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationDirector = void 0;
var ConfigurationDirector = /** @class */ (function () {
    function ConfigurationDirector() {
    }
    ConfigurationDirector.prototype.createDevConfig = function (builder, _a) {
        var database = _a.database, host = _a.host, port = _a.port, username = _a.username, password = _a.password;
        return builder
            .setDatabaseType(database)
            .setHost(host)
            .setPort(port)
            .setUsername(username)
            .setPassword(password)
            .build();
    };
    ConfigurationDirector.prototype.createProdConfig = function (builder, _a) {
        var database = _a.database, host = _a.host, port = _a.port, username = _a.username, password = _a.password;
        return builder
            .setDatabaseType(database)
            .setHost(host)
            .setPort(port)
            .setUsername(username)
            .setPassword(password)
            .setEnablePooling(true)
            .setMaxConnections(50)
            .setTimeoutSeconds(15)
            .build();
    };
    ConfigurationDirector.prototype.createCustomConfig = function (builder, _a) {
        var database = _a.database, host = _a.host, port = _a.port, username = _a.username, password = _a.password, maxConnection = _a.maxConnection, enablePooling = _a.enablePooling, timeoutSeconds = _a.timeoutSeconds;
        return builder
            .setDatabaseType(database)
            .setHost(host)
            .setPort(port)
            .setUsername(username)
            .setPassword(password)
            .setEnablePooling(enablePooling)
            .setMaxConnections(maxConnection)
            .setTimeoutSeconds(timeoutSeconds)
            .build();
    };
    return ConfigurationDirector;
}());
exports.ConfigurationDirector = ConfigurationDirector;
