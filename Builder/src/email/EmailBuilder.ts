import { Email } from "./Email";
import { IEmailBuilder } from "./email-builder.interface";

export class EmailBuilder extends Email implements IEmailBuilder {
    constructor (destinatario: string) {
        super(destinatario);
    }

    adicionarAnexo(anexo: string): this {
        super.adicionarAnexo(anexo);
        return this;
    }

    adicionarCorpo(corpoHTML: string): this {
        super.adcionarCorpoHTML(corpoHTML);
        return this;
    }

    definirAssunto(assunto: string): this {
        super.adicionarAssunto(assunto);
        return this;
    }

    build(): Email {
        return this;
    }
}