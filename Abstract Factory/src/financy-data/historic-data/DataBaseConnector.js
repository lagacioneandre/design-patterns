"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConnector = void 0;
// concrete class
var DataBaseConnector = /** @class */ (function () {
    function DataBaseConnector() {
    }
    DataBaseConnector.prototype.createConection = function (conectionType) {
        return "Data base connected: ".concat(conectionType, ".");
    };
    return DataBaseConnector;
}());
exports.DataBaseConnector = DataBaseConnector;
