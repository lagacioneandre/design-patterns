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
exports.EmailBuilder = void 0;
var Email_1 = require("./Email");
var EmailBuilder = /** @class */ (function (_super) {
    __extends(EmailBuilder, _super);
    function EmailBuilder(destinatario) {
        return _super.call(this, destinatario) || this;
    }
    EmailBuilder.prototype.adicionarAnexo = function (anexo) {
        _super.prototype.adicionarAnexo.call(this, anexo);
        return this;
    };
    EmailBuilder.prototype.adicionarCorpo = function (corpoHTML) {
        _super.prototype.adcionarCorpoHTML.call(this, corpoHTML);
        return this;
    };
    EmailBuilder.prototype.definirAssunto = function (assunto) {
        _super.prototype.adicionarAssunto.call(this, assunto);
        return this;
    };
    EmailBuilder.prototype.build = function () {
        return this;
    };
    return EmailBuilder;
}(Email_1.Email));
exports.EmailBuilder = EmailBuilder;
