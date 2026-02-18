import { IDocument } from "./document.interface";

export class PDFDocument implements IDocument {
    render(content: string): void {
        console.log(`PDF: Imprimindo relatorio: ${content}`);
    }
}