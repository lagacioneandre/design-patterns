"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamConnector = void 0;
// concrete product
var StreamConnector = /** @class */ (function () {
    function StreamConnector() {
    }
    StreamConnector.prototype.createConection = function (conectionType) {
        return "Stream connected: ".concat(conectionType, ".");
    };
    return StreamConnector;
}());
exports.StreamConnector = StreamConnector;
