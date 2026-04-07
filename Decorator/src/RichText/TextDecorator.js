"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDecorator = void 0;
var TextDecorator = /** @class */ (function () {
    function TextDecorator(textElement) {
        this.textElement = textElement;
    }
    TextDecorator.prototype.render = function () {
        return this.textElement.render();
    };
    return TextDecorator;
}());
exports.TextDecorator = TextDecorator;
