"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinuxFactory = void 0;
var LinuxButton_1 = require("../linux/LinuxButton");
var LinuxCheckbox_1 = require("../linux/LinuxCheckbox");
var LinuxRadioButton_1 = require("../linux/LinuxRadioButton");
// concrete factory
var LinuxFactory = /** @class */ (function () {
    function LinuxFactory() {
    }
    LinuxFactory.prototype.creatButton = function () {
        return new LinuxButton_1.LinuxButton();
    };
    LinuxFactory.prototype.creatCheckbox = function () {
        return new LinuxCheckbox_1.LinuxCheckbox();
    };
    // <<< MODIFICACAO NECESSARIA PARA O NOVO TIPO DE PRODUTO
    LinuxFactory.prototype.createRadioButton = function () {
        return new LinuxRadioButton_1.LinuxRadioButton();
    };
    return LinuxFactory;
}());
exports.LinuxFactory = LinuxFactory;
