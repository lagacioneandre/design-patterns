export class Email {
    private destinatario: string;
    private assunto!: string;
    private corpoHTML!: string;
    private anexos: string[] = [];

    protected constructor (destinatario: string) {
        this.destinatario = destinatario;
    }

    static criarEmail(destinatario: string): Email {
        return new Email(destinatario);
    }

    protected adicionarAnexo(anexo: string) {
        this.anexos.push(anexo);
    }

    protected adicionarAssunto(assunto: string) {
        this.assunto = assunto;
    }

    protected adcionarCorpoHTML(corpoHTML: string) {
        this.corpoHTML = corpoHTML;
    }

    enviar() {
        console.log('=== Email enviado ===');
        console.log(`Destinatario: ${this.destinatario}`);
        console.log(`Assunto: ${this.assunto}`);
        console.log(`Corpo: ${this.corpoHTML}`);
        console.log(`Anexos: ${this.anexos.map(email => '\n' + email)}`);
        console.log('\n\n');
    }
}