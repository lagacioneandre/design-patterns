"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VictorianFactory = void 0;
var VictorianChair_1 = require("../victorian/VictorianChair");
var VictorianSofa_1 = require("../victorian/VictorianSofa");
var VictorianTable_1 = require("../victorian/VictorianTable");
// concrete factory
var VictorianFactory = /** @class */ (function () {
    function VictorianFactory() {
    }
    VictorianFactory.prototype.createChair = function () {
        return new VictorianChair_1.VictorianChair();
    };
    VictorianFactory.prototype.createSofa = function () {
        return new VictorianSofa_1.VictorianSofa();
    };
    VictorianFactory.prototype.createTable = function () {
        return new VictorianTable_1.VictorianTable();
    };
    return VictorianFactory;
}());
exports.VictorianFactory = VictorianFactory;
