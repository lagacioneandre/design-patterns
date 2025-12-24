"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacOSFactory = void 0;
var MacOSButton_1 = require("../macOS/MacOSButton");
var MacOSCheckbox_1 = require("../macOS/MacOSCheckbox");
var MacOSRadioButton_1 = require("../macOS/MacOSRadioButton");
// Concrete factory
var MacOSFactory = /** @class */ (function () {
    function MacOSFactory() {
    }
    MacOSFactory.prototype.creatButton = function () {
        return new MacOSButton_1.MacOSButton();
    };
    MacOSFactory.prototype.creatCheckbox = function () {
        return new MacOSCheckbox_1.MacOSCheckbox();
    };
    // <<< MODIFICACAO NECESSARIA PARA O NOVO TIPO DE PRODUTO
    MacOSFactory.prototype.createRadioButton = function () {
        return new MacOSRadioButton_1.MacOSRadioButton();
    };
    return MacOSFactory;
}());
exports.MacOSFactory = MacOSFactory;
