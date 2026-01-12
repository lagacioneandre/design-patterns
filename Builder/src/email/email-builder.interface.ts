import { Email } from "./Email";

export interface IEmailBuilder {
    definirAssunto(assunto: string): this;
    adicionarCorpo(corpoHTML: string): this;
    adicionarAnexo(anexo: string): this;
    build(): Email;
}