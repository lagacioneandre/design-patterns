"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDecorator = void 0;
// Base Decorator
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    CoffeeDecorator.prototype.cost = function () {
        return this.coffee.cost();
    };
    CoffeeDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription();
    };
    return CoffeeDecorator;
}());
exports.CoffeeDecorator = CoffeeDecorator;
