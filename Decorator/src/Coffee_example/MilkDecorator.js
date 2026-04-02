"use strict";
// Concrete Decorator A
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
var CoffeeDecorator_1 = require("./CoffeeDecorator");
var MilkDecorator = /** @class */ (function (_super) {
    __extends(MilkDecorator, _super);
    function MilkDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MilkDecorator.prototype.getDescription = function () {
        return "".concat(_super.prototype.getDescription.call(this), ", Leite");
    };
    MilkDecorator.prototype.cost = function () {
        return _super.prototype.cost.call(this) + 2;
    };
    return MilkDecorator;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.MilkDecorator = MilkDecorator;
