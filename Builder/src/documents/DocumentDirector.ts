import { IDocumentBuilder } from "./document-builder.interface";

export class DocumentDirector {
    private builder: IDocumentBuilder;

    constructor (builder: IDocumentBuilder) {
        this.builder = builder;
    }

    printSimpleIntroduction(title: string) {
        this.builder.reset();
        const document = this.builder
            .addTitle(title)
            .addSection('Introduction')
            .addContent('This is the intoduction section...')
            .addSection('About this document')
            .addContent('This is the section About this document.')
            .getDocument();
        document.printDocument();
    }

    printCompleteDocument(title: string) {
        this.builder.reset();
        const document = this.builder
            .addTitle(title)
            .addSection('General')
            .addContent('Tecnique details')
            .addSection('Another sections')
            .addContent('This is the content of the second section.')
            .getDocument();
        document.printDocument();
    }
}