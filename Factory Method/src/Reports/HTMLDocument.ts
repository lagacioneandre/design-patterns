import { IDocument } from "./document.interface";

export class HTMLDocument implements IDocument {
    render(content: string): void {
        console.log(`HTML: Imprimindo relatorio: ${content}`);
    }
}