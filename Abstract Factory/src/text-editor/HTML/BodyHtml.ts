import { Body } from "../interfaces/body.interface";

// concrete class
export class BodyHtml implements Body {
    content(): string {
        return 'Conteudo do documento HTML.';
    }
}