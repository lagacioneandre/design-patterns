import { IDocument } from "./document.interface";

export class CSVDocument implements IDocument {
    render(content: string): void {
        console.log(`CSV: Imprimindo relatorio: ${content}`);
    }
}