"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var EmailBuilder_1 = require("./EmailBuilder");
var Client = /** @class */ (function () {
    function Client(destinatario) {
        this.destinatario = destinatario;
    }
    Client.prototype.enviarEmailSimples = function () {
        var emailBuilder = new EmailBuilder_1.EmailBuilder(this.destinatario);
        emailBuilder
            .definirAssunto('Assunto do email simples')
            .adicionarCorpo('Corpo do email simples.')
            .build()
            .enviar();
    };
    Client.prototype.enviarEmailCompleto = function () {
        var emailBuilder = new EmailBuilder_1.EmailBuilder(this.destinatario);
        emailBuilder
            .definirAssunto('Assunto o email completo')
            .adicionarCorpo('Corpo do email completo.')
            .adicionarAnexo('Anexo 1.')
            .adicionarAnexo('Anexo 2.')
            .build()
            .enviar();
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client('email@destino.com');
    client.enviarEmailSimples();
    client.enviarEmailCompleto();
})();
