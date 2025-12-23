"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionFactory = void 0;
var EmailAlert_1 = require("../production/EmailAlert");
var FileLogger_1 = require("../production/FileLogger");
var JSONFormatter_1 = require("../production/JSONFormatter");
// concrete factory
var ProductionFactory = /** @class */ (function () {
    function ProductionFactory() {
    }
    ProductionFactory.prototype.createFormatter = function () {
        return new JSONFormatter_1.JSONFormatter();
    };
    ProductionFactory.prototype.createConnection = function () {
        return new FileLogger_1.FileLogger();
    };
    ProductionFactory.prototype.createVisualization = function () {
        return new EmailAlert_1.EmailAlert();
    };
    return ProductionFactory;
}());
exports.ProductionFactory = ProductionFactory;
