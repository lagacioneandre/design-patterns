import { IDocument } from "./document.interface";
import { DocumentGenerator } from "./DocumentGenerator";
import { HTMLDocument } from "./HTMLDocument";

export class HTMLGenerator extends DocumentGenerator {
    createDocument(): IDocument {
        return new HTMLDocument();
    }
}