"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsFactory = void 0;
var WindowsButton_1 = require("../windows/WindowsButton");
var WindowsCheckbox_1 = require("../windows/WindowsCheckbox");
var WindowsRadioButton_1 = require("../windows/WindowsRadioButton");
// Concrete factory
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.creatButton = function () {
        return new WindowsButton_1.WindowsButton();
    };
    WindowsFactory.prototype.creatCheckbox = function () {
        return new WindowsCheckbox_1.WindowsCheckbox();
    };
    // <<< MODIFICACAO NECESSARIA PARA O NOVO TIPO DE PRODUTO
    WindowsFactory.prototype.createRadioButton = function () {
        return new WindowsRadioButton_1.WindowsRadioButton();
    };
    return WindowsFactory;
}());
exports.WindowsFactory = WindowsFactory;
