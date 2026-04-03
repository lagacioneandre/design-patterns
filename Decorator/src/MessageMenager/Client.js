"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseStream_1 = require("./BaseStream");
var CompressionDecorator_1 = require("./CompressionDecorator");
var EncryptionDecorator_1 = require("./EncryptionDecorator");
var ProfanityFilterDecorator_1 = require("./ProfanityFilterDecorator");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var message = new BaseStream_1.BaseStream();
        message = new CompressionDecorator_1.CompressionDecorator(message);
        message = new ProfanityFilterDecorator_1.ProfanityFilterDecorator(message);
        message = new EncryptionDecorator_1.EncryptionDecorator(message);
        var result = message.process('  olha esse bobo   ');
        console.log(result);
    };
    Client.prototype.execute2 = function () {
        var message = new BaseStream_1.BaseStream();
        message = new ProfanityFilterDecorator_1.ProfanityFilterDecorator(message);
        message = new EncryptionDecorator_1.EncryptionDecorator(message);
        message = new CompressionDecorator_1.CompressionDecorator(message);
        var result = message.process('  aquele tanso ali ');
        console.log(result);
    };
    return Client;
}());
new Client().execute();
new Client().execute2();
