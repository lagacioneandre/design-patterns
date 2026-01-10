export class Document {
    private contentList: string[] = [];

    private constructor() {}

    static newDocument() {
        return new Document();
    }

    addContent(content: string) {
        this.contentList.push(content);
    }

    printDocument() {
        console.log("\n--- INÍCIO DO DOCUMENTO ---");
        if (this.contentList.length === 0) {
            console.log("[Documento Vazio]");
        } else {
            this.contentList.forEach(item => {
                console.log(item);
            });
        }
        console.log("--- FIM DO DOCUMENTO ---\n");
    }
}