"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var AdditionCommand_1 = require("./AdditionCommand");
var Calculator_1 = require("./Calculator");
var Operation_1 = require("./Operation");
var SubtractionCommand_1 = require("./SubtractionCommand");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var operations = new Operation_1.Operation();
        var calculator = new Calculator_1.Calculator();
        var add10 = new AdditionCommand_1.AdditionCommand(operations, 10);
        var add5 = new AdditionCommand_1.AdditionCommand(operations, 5);
        var remove3 = new SubtractionCommand_1.SubtractionCommand(operations, 3);
        calculator.execute(add10); // 10
        calculator.execute(add5); // 15
        calculator.execute(remove3); // 12
        calculator.undo(); // 15
        calculator.undo(); // 10
        calculator.undo(); // 0
        calculator.undo(); // No items in history
    };
    return Client;
}());
exports.Client = Client;
(function () {
    new Client().execute();
})();
