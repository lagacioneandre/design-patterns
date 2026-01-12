import { EmailBuilder } from "./EmailBuilder";

export class Client {
    private destinatario: string;

    constructor (destinatario: string) {
        this.destinatario = destinatario;
    }

    enviarEmailSimples() {
        const emailBuilder = new EmailBuilder(this.destinatario);
        emailBuilder
            .definirAssunto('Assunto do email simples')
            .adicionarCorpo('Corpo do email simples.')
            .build()
            .enviar();
    }

    enviarEmailCompleto() {
        const emailBuilder = new EmailBuilder(this.destinatario);
        emailBuilder
            .definirAssunto('Assunto o email completo')
            .adicionarCorpo('Corpo do email completo.')
            .adicionarAnexo('Anexo 1.')
            .adicionarAnexo('Anexo 2.')
            .build()
            .enviar();
    }
}

(function() {
    const client = new Client('email@destino.com');
    client.enviarEmailSimples();
    client.enviarEmailCompleto();
})();