"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlainText = void 0;
var PlainText = /** @class */ (function () {
    function PlainText(text) {
        this.text = text;
    }
    PlainText.prototype.render = function () {
        return this.text;
    };
    return PlainText;
}());
exports.PlainText = PlainText;
