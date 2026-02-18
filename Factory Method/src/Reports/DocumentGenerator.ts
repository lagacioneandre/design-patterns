import { IDocument } from "./document.interface";

export abstract class DocumentGenerator {
    abstract createDocument(): IDocument;

    private addDocumentSign() {
        console.log('Assinatura digital adicionada.');
    }

    export(content: string) {
        console.log('Preparando o documento para ser exportado.');
        this.addDocumentSign();
        const document = this.createDocument();
        document.render(content);
    }
}