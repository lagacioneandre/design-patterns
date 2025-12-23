"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopFactory = void 0;
var ConsoleLogger_1 = require("../develop/ConsoleLogger");
var ScreenDebugger_1 = require("../develop/ScreenDebugger");
var TextFormatter_1 = require("../develop/TextFormatter");
// concrete factory
var DevelopFactory = /** @class */ (function () {
    function DevelopFactory() {
    }
    DevelopFactory.prototype.createFormatter = function () {
        return new TextFormatter_1.TextFormatter();
    };
    DevelopFactory.prototype.createConnection = function () {
        return new ConsoleLogger_1.ConsoleLogger();
    };
    DevelopFactory.prototype.createVisualization = function () {
        return new ScreenDebugger_1.ScreenDebugger();
    };
    return DevelopFactory;
}());
exports.DevelopFactory = DevelopFactory;
