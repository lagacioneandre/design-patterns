"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSystem = void 0;
// client
var LogSystem = /** @class */ (function () {
    function LogSystem(factory) {
        this.log = factory.createConnection();
        this.formatter = factory.createFormatter();
        this.visualizator = factory.createVisualization();
    }
    LogSystem.prototype.build = function () {
        var rawData = this.log.getLog();
        var parsedData = this.formatter.format(rawData);
        var print = this.visualizator.print(parsedData);
        console.log(rawData);
        console.log(parsedData);
        console.log(print);
    };
    return LogSystem;
}());
exports.LogSystem = LogSystem;
