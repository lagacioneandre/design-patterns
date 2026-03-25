"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
// Composite - nesse caso e o departamento
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.children = [];
    }
    Department.prototype.add = function (employee) {
        this.children.push(employee);
    };
    Department.prototype.remove = function (employee) {
        var index = this.children.indexOf(employee);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    // A magica da recursao acontece aqui
    Department.prototype.getSalary = function () {
        return this.children.reduce(function (total, child) { return (total + child.getSalary()); }, 0);
    };
    return Department;
}());
exports.Department = Department;
