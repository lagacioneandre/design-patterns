"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Designer = void 0;
// Leaf - nesse caso um empregado (Employee)
var Designer = /** @class */ (function () {
    function Designer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Designer.prototype.getName = function () {
        return this.name;
    };
    Designer.prototype.getSalary = function () {
        return this.salary;
    };
    return Designer;
}());
exports.Designer = Designer;
