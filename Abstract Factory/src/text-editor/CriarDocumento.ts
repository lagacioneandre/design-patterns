import { Document } from "./factories/interfaces/document.interface";

// client
export class CriarDocumento {
    private factory: Document;

    constructor (factory: Document) {
        this.factory = factory;
    }

    build() {
        const header = this.factory.header();
        const body = this.factory.body();
        const footer = this.factory.footer();
        console.log(header.title());
        console.log(body.content());
        console.log(footer.corpyright());
    }
}