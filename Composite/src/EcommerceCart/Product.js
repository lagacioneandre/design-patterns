"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prodcut = void 0;
var Prodcut = /** @class */ (function () {
    function Prodcut(name, price, weight) {
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
    Prodcut.prototype.getPrice = function () {
        return this.price;
    };
    Prodcut.prototype.getWeight = function () {
        return this.weight;
    };
    return Prodcut;
}());
exports.Prodcut = Prodcut;
