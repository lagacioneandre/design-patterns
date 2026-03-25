"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
// Leaf - nesse caso um empregado (Employee)
var Developer = /** @class */ (function () {
    function Developer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    return Developer;
}());
exports.Developer = Developer;
