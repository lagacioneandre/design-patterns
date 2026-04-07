import { TextElement } from "./text-element.interface";

export class PlainText implements TextElement {
    constructor(private text: string) {}

    render(): string {
        return this.text;
    }
}