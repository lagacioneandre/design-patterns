"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernFactory = void 0;
var ModernChair_1 = require("../modern/ModernChair");
var ModernSofa_1 = require("../modern/ModernSofa");
var ModernTable_1 = require("../modern/ModernTable");
// concrete factory
var ModernFactory = /** @class */ (function () {
    function ModernFactory() {
    }
    ModernFactory.prototype.createChair = function () {
        return new ModernChair_1.ModernChair();
    };
    ModernFactory.prototype.createSofa = function () {
        return new ModernSofa_1.ModernSofa();
    };
    ModernFactory.prototype.createTable = function () {
        return new ModernTable_1.ModernTable();
    };
    return ModernFactory;
}());
exports.ModernFactory = ModernFactory;
