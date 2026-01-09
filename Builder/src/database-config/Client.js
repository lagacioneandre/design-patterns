"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var ConfigurationDirector_1 = require("./ConfigurationDirector");
var DatabaseConfigBuilder_1 = require("./DatabaseConfigBuilder");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.createDevConfig = function () {
        var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
        var data = {
            database: 'MySQL',
            host: 'localhost',
            port: 3000,
            username: 'andre',
            password: '123456',
        };
        var director = new ConfigurationDirector_1.ConfigurationDirector();
        var config = director.createDevConfig(builder, data);
        config.getDatabaseConfiguration();
    };
    Client.prototype.createProdConfig = function () {
        var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
        var data = {
            database: 'PostgreSQL',
            host: 'host:prod-host',
            port: 8080,
            username: 'admin',
            password: '102030',
        };
        var director = new ConfigurationDirector_1.ConfigurationDirector();
        var config = director.createProdConfig(builder, data);
        config.getDatabaseConfiguration();
    };
    Client.prototype.createCustomConfig = function () {
        var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
        var data = {
            database: 'SQLServer',
            host: 'host:homol-host',
            port: 9834,
            username: 'user',
            password: '1234500',
            maxConnection: 23,
            enablePooling: true,
            timeoutSeconds: 60,
        };
        var director = new ConfigurationDirector_1.ConfigurationDirector();
        var config = director.createCustomConfig(builder, data);
        config.getDatabaseConfiguration();
    };
    Client.prototype.createConfigTestPortNumber = function () {
        try {
            var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
            var data = {
                database: 'SQLServer',
                host: 'localhost',
                port: 1000,
                username: 'andre',
                password: '123456',
            };
            var director = new ConfigurationDirector_1.ConfigurationDirector();
            var config = director.createDevConfig(builder, data);
            config.getDatabaseConfiguration();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createConfigTestMaxConnection = function () {
        try {
            var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
            var data = {
                database: 'PostgreSQL',
                host: 'host:homol-host',
                port: 9834,
                username: 'user',
                password: '1234500',
                maxConnection: -10,
                enablePooling: true,
                timeoutSeconds: 60,
            };
            var director = new ConfigurationDirector_1.ConfigurationDirector();
            var config = director.createCustomConfig(builder, data);
            config.getDatabaseConfiguration();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createConfigTestOtherMaxConnection = function () {
        try {
            var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
            var data = {
                database: 'MySQL',
                host: 'host:homol-host',
                port: 9834,
                username: 'user',
                password: '1234500',
                maxConnection: 101,
                enablePooling: true,
                timeoutSeconds: 60,
            };
            var director = new ConfigurationDirector_1.ConfigurationDirector();
            var config = director.createCustomConfig(builder, data);
            config.getDatabaseConfiguration();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createConfigTestMissingField = function () {
        try {
            var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
            var data = {
                database: 'PostgreSQL',
                host: 'localhost',
                port: 3000,
                username: 'teste',
                password: '',
            };
            builder.setDatabaseType(data.database)
                .setHost(data.host)
                .setPort(data.port)
                .setUsername(data.username)
                .build();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createInvalidDB = function () {
        try {
            var builder = new DatabaseConfigBuilder_1.DatabaseConfigBuilder();
            var data = {
                database: 'MongoBD',
                host: 'host:homol-host',
                port: 9834,
                username: 'user',
                password: '1234500',
                maxConnection: 101,
                enablePooling: true,
                timeoutSeconds: 60,
            };
            var director = new ConfigurationDirector_1.ConfigurationDirector();
            var config = director.createCustomConfig(builder, data);
            config.getDatabaseConfiguration();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.createDevConfig();
    client.createProdConfig();
    client.createCustomConfig();
    client.createConfigTestPortNumber();
    client.createConfigTestMaxConnection();
    client.createConfigTestOtherMaxConnection();
    client.createConfigTestMissingField();
    client.createInvalidDB();
})();
