import { CSVDocument } from "./CSVDocument";
import { IDocument } from "./document.interface";
import { DocumentGenerator } from "./DocumentGenerator";

export class CSVGenerator extends DocumentGenerator {
    createDocument(): IDocument {
        return new CSVDocument();
    }
}