"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WindowsLog_1 = require("./WindowsLog");
var WindowsLogAdapter_1 = require("./WindowsLogAdapter");
var Client = /** @class */ (function () {
    function Client(logWarning) {
        this.logWarning = logWarning;
    }
    Client.prototype.getLogStatus = function () {
        console.log('Buscando log de status...');
        this.logWarning.showWarning();
    };
    return Client;
}());
(function () {
    var legacy = new WindowsLog_1.WindowsLog();
    var adapter = new WindowsLogAdapter_1.WindowsLogAdapter(legacy);
    var client = new Client(adapter);
    client.getLogStatus();
})();
