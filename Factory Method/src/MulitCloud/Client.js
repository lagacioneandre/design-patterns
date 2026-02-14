"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWSManager_1 = require("./AWSManager");
var AzureManager_1 = require("./AzureManager");
var CloudErrorManager_1 = require("./CloudErrorManager");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function (factory) {
        try {
            console.log('Starting cloud server.');
            factory.startServer();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Client;
}());
(function () {
    var client = new Client();
    var aws = new AWSManager_1.AWSManager();
    var azure = new AzureManager_1.AzureManager();
    var error = new CloudErrorManager_1.CloudErrorManager();
    client.execute(aws);
    client.execute(azure);
    client.execute(error);
})();
