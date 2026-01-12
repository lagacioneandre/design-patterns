"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email(destinatario) {
        this.anexos = [];
        this.destinatario = destinatario;
    }
    Email.criarEmail = function (destinatario) {
        return new Email(destinatario);
    };
    Email.prototype.adicionarAnexo = function (anexo) {
        this.anexos.push(anexo);
    };
    Email.prototype.adicionarAssunto = function (assunto) {
        this.assunto = assunto;
    };
    Email.prototype.adcionarCorpoHTML = function (corpoHTML) {
        this.corpoHTML = corpoHTML;
    };
    Email.prototype.enviar = function () {
        console.log('=== Email enviado ===');
        console.log("Destinatario: ".concat(this.destinatario));
        console.log("Assunto: ".concat(this.assunto));
        console.log("Corpo: ".concat(this.corpoHTML));
        console.log("Anexos: ".concat(this.anexos.map(function (email) { return '\n' + email; })));
        console.log('\n\n');
    };
    return Email;
}());
exports.Email = Email;
