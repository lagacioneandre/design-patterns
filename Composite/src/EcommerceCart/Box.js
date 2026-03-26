"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box() {
        this.products = [];
    }
    Box.prototype.add = function (item) {
        this.products.push(item);
    };
    Box.prototype.remove = function (item) {
        var index = this.products.indexOf(item);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    };
    Box.prototype.getPrice = function () {
        return this.products.reduce(function (acc, item) {
            return acc + item.getPrice();
        }, 0);
    };
    Box.prototype.getWeight = function () {
        return this.products.reduce(function (acc, item) {
            return acc + item.getWeight();
        }, 0.2);
    };
    return Box;
}());
exports.Box = Box;
