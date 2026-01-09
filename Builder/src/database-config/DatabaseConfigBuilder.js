"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigBuilder = void 0;
var DatabaseConfig_1 = require("./DatabaseConfig");
var DatabaseConfigBuilder = /** @class */ (function () {
    function DatabaseConfigBuilder() {
        this.PORTS_STARTS_AT = 1024;
        this.MAX_CONNECTIONS_STARTS_AT = 1;
        this.MAX_CONNECTIONS_ENDS_AT = 100;
        this.VALID_DB_TYPES = ["PostgreSQL", "MySQL", "SQLServer"];
    }
    DatabaseConfigBuilder.prototype.setDatabaseType = function (database) {
        this.database = database;
        return this;
    };
    DatabaseConfigBuilder.prototype.setHost = function (host) {
        this.host = host;
        return this;
    };
    DatabaseConfigBuilder.prototype.setMaxConnections = function (maxConnection) {
        this.maxConnection = maxConnection;
        return this;
    };
    DatabaseConfigBuilder.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    DatabaseConfigBuilder.prototype.setPort = function (port) {
        this.port = port;
        return this;
    };
    DatabaseConfigBuilder.prototype.setUsername = function (username) {
        this.username = username;
        return this;
    };
    DatabaseConfigBuilder.prototype.setEnablePooling = function (enable) {
        this.enablePooling = enable;
        return this;
    };
    DatabaseConfigBuilder.prototype.setTimeoutSeconds = function (timeout) {
        this.timeoutSeconds = timeout;
        return this;
    };
    DatabaseConfigBuilder.prototype.build = function () {
        var _a;
        this.validateRequiredParams();
        this.validateDBTypes();
        this.validatePortNumber();
        this.validateMaxConnections();
        this.validateTimeoutSeconds();
        var finalMaxConnection = this.maxConnection || 10;
        var finalEnablePooling = (_a = this.enablePooling) !== null && _a !== void 0 ? _a : true;
        var finalTimeoutSeconds = this.timeoutSeconds || 30;
        return new DatabaseConfig_1.DatabaseConfig({
            database: this.database,
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
            maxConnection: finalMaxConnection,
            enablePooling: finalEnablePooling,
            timeoutSeconds: finalTimeoutSeconds,
        });
    };
    DatabaseConfigBuilder.prototype.validateRequiredParams = function () {
        if (!this.database || !this.host || !this.port || !this.username || !this.password) {
            throw new Error("BUILDER ERROR: All mandatory fields (database, host, port, username, password) must be set.");
        }
    };
    DatabaseConfigBuilder.prototype.validateDBTypes = function () {
        var _this = this;
        if (!this.VALID_DB_TYPES.filter(function (item) { return item === _this.database; }).length) {
            throw new Error("BUILDER ERROR: Database type must be one of: ".concat(this.VALID_DB_TYPES.join(', '), "."));
        }
    };
    DatabaseConfigBuilder.prototype.validatePortNumber = function () {
        var isPortValid = this.port > this.PORTS_STARTS_AT;
        if (!isPortValid) {
            throw new Error("The port number needs to be more than ".concat(this.PORTS_STARTS_AT, "!"));
        }
    };
    DatabaseConfigBuilder.prototype.validateMaxConnections = function () {
        if (this.maxConnection === undefined) {
            return;
        }
        var isMaxConnectionValid = this.maxConnection >= this.MAX_CONNECTIONS_STARTS_AT && this.maxConnection <= this.MAX_CONNECTIONS_ENDS_AT;
        if (!isMaxConnectionValid) {
            throw new Error("Max connections needs to be between ".concat(this.MAX_CONNECTIONS_STARTS_AT, " and ").concat(this.MAX_CONNECTIONS_ENDS_AT, "!"));
        }
    };
    DatabaseConfigBuilder.prototype.validateTimeoutSeconds = function () {
        if (this.timeoutSeconds !== undefined && this.timeoutSeconds <= 0) {
            throw new Error("BUILDER ERROR: Timeout seconds must be a positive number.");
        }
    };
    return DatabaseConfigBuilder;
}());
exports.DatabaseConfigBuilder = DatabaseConfigBuilder;
