import { DocumentDirector } from "./DocumentDirector";
import { SpecificDocumentBuilder } from "./SpecificDocumentBuilder";
import { TechDocumentBuilder } from "./TechDocumentBuilder";

export class Client {
    constructor () {}

    buildSpecificDocument() {
        const builder = new SpecificDocumentBuilder();
        const director = new DocumentDirector(builder);
        director.printSimpleIntroduction('This is Specific document builder for Simple introduction');
        director.printCompleteDocument('This is Specific document builder for Complete document');
    }

    buildTechDocument() {
        const builder = new TechDocumentBuilder();
        const director = new DocumentDirector(builder);
        director.printSimpleIntroduction('This is Tech document builder for Simple introduction');
        director.printCompleteDocument('This is Tech document builder for Complete document');
    }
}

(function() {
    const client = new Client();
    client.buildSpecificDocument();
    client.buildTechDocument();
})()