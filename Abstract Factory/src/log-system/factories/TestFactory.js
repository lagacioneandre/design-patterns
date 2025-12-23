"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFactory = void 0;
var DataValidator_1 = require("../test/DataValidator");
var MemoryLogger_1 = require("../test/MemoryLogger");
var XMLFormatter_1 = require("../test/XMLFormatter");
// concrete factory
var TestFactory = /** @class */ (function () {
    function TestFactory() {
    }
    TestFactory.prototype.createFormatter = function () {
        return new XMLFormatter_1.XMLFormatter();
    };
    TestFactory.prototype.createConnection = function () {
        return new MemoryLogger_1.MemoryLogger();
    };
    TestFactory.prototype.createVisualization = function () {
        return new DataValidator_1.DataValidator();
    };
    return TestFactory;
}());
exports.TestFactory = TestFactory;
