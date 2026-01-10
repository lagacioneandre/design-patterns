import { Document } from "./Document";
import { IDocumentBuilder } from "./document-builder.interface";

export class SpecificDocumentBuilder implements IDocumentBuilder {
    private document!: Document;
    private sectionCounter = 1;

    constructor() {}

    reset(): void {
        this.document = Document.newDocument();
        this.sectionCounter = 1;
    }

    addTitle(title: string): this {
        this.document.addContent(`[ESPEC] ${title}`);
        return this;
    }

    addSection(section: string): this {
        this.document.addContent(`${this.sectionCounter} SECAO: ${section}`);
        this.sectionCounter++;
        return this;
    }

    addContent(content: string): this {
        this.document.addContent(`  - ${content}`);
        return this;
    }

    getDocument(): Document {
        return this.document;
    }
}