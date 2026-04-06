"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoldDecorator_1 = require("./BoldDecorator");
var CodeDecorator_1 = require("./CodeDecorator");
var ItalicDecorator_1 = require("./ItalicDecorator");
var PlainText_1 = require("./PlainText");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var text = new PlainText_1.PlainText('Ola mundo');
        text = new CodeDecorator_1.CodeDecorator(text);
        text = new ItalicDecorator_1.ItalicDecorator(text);
        text = new BoldDecorator_1.BoldDecorator(text);
        console.log(text.render());
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
