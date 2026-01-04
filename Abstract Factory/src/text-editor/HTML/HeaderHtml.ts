import { Header } from "../interfaces/header.interface";

// concrete class
export class HeaderHtml implements Header {
    title(): string {
        return 'Titulo do documento HTML.';
    }
}