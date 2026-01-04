import { Body } from "../interfaces/body.interface";

// abstract product
export class BodyPDF implements Body {
    content(): string {
        return 'Conteudo do documento em PDF.';
    }
}