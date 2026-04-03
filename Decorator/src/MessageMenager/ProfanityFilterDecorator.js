"use strict";
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
exports.ProfanityFilterDecorator = void 0;
var StreamDecorator_1 = require("./StreamDecorator");
var ProfanityFilterDecorator = /** @class */ (function (_super) {
    __extends(ProfanityFilterDecorator, _super);
    function ProfanityFilterDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forbidenWords = ['bobo', 'tanso'];
        return _this;
    }
    ProfanityFilterDecorator.prototype.process = function (data) {
        var _this = this;
        var message = _super.prototype.process.call(this, data);
        this.forbidenWords.forEach(function (word) { return message = message.replace(word, _this.mask(word)); });
        return message;
    };
    ProfanityFilterDecorator.prototype.mask = function (word) {
        return word.split('').map(function () { return '*'; }).join('');
    };
    return ProfanityFilterDecorator;
}(StreamDecorator_1.StreamDecorator));
exports.ProfanityFilterDecorator = ProfanityFilterDecorator;
