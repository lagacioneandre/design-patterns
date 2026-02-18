import { IDocument } from "./document.interface";
import { DocumentGenerator } from "./DocumentGenerator";
import { PDFDocument } from "./PDFDocument";

export class PDFGenerator extends DocumentGenerator {
    createDocument(): IDocument {
        return new PDFDocument();
    }
}