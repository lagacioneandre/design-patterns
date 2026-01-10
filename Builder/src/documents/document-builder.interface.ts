import { Document } from "./Document";

export interface IDocumentBuilder {
    reset(): void;
    addTitle(title: string): this;
    addSection(section: string): this;
    addContent(content: string): this;
    getDocument(): Document;
}