import { TextElement } from "./text-element.interface";

export abstract class TextDecorator implements TextElement {
    constructor (protected textElement: TextElement) {}

    render(): string {
        return this.textElement.render();
    }
}