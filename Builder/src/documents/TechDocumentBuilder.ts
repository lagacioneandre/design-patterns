import { CONVERT_TO_ROMAN_NUMBERS } from "./convert-to-roman-numbers";
import { Document } from "./Document";
import { IDocumentBuilder } from "./document-builder.interface";

export class TechDocumentBuilder implements IDocumentBuilder {
    private document!: Document;
    private sectionCounter = 1;

    constructor() {}

    reset(): void {
        this.document = Document.newDocument();
        this.sectionCounter = 1;
    }

    addTitle(title: string): this {
        const parsedTitle = title.toLocaleUpperCase('pt-BR');
        this.document.addContent(`=== ${parsedTitle} ===`);
        return this;
    }

    addSection(section: string): this {
        const romanNumber = CONVERT_TO_ROMAN_NUMBERS(this.sectionCounter);
        this.document.addContent(`${romanNumber}. ${section}`);
        this.sectionCounter++;
        return this;
    }

    addContent(content: string): this {
        this.document.addContent(content);
        return this;
    }

    getDocument(): Document {
        return this.document;
    }
}