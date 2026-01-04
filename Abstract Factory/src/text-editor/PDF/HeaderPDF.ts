import { Header } from "../interfaces/header.interface";

// abstract product
export class HeaderPDF implements Header {
    title(): string {
        return 'Titulo do documento em PDF.';
    }
}