"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtdecoFactory = void 0;
var ArtdecoChair_1 = require("../artdeco/ArtdecoChair");
var ArtdecoSofa_1 = require("../artdeco/ArtdecoSofa");
var ArtdecoTable_1 = require("../artdeco/ArtdecoTable");
// concrete factory
var ArtdecoFactory = /** @class */ (function () {
    function ArtdecoFactory() {
    }
    ArtdecoFactory.prototype.createChair = function () {
        return new ArtdecoChair_1.ArtdecoChair();
    };
    ArtdecoFactory.prototype.createSofa = function () {
        return new ArtdecoSofa_1.ArtdecoSofa();
    };
    ArtdecoFactory.prototype.createTable = function () {
        return new ArtdecoTable_1.ArtdecoTable();
    };
    return ArtdecoFactory;
}());
exports.ArtdecoFactory = ArtdecoFactory;
