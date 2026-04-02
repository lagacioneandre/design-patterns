"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCoffee = void 0;
// Concrete Compoent
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.cost = function () {
        return 5;
    };
    SimpleCoffee.prototype.getDescription = function () {
        return 'Cafe Simples';
    };
    return SimpleCoffee;
}());
exports.SimpleCoffee = SimpleCoffee;
