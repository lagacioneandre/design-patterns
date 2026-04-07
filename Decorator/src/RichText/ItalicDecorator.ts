import { TextDecorator } from "./TextDecorator";

export class ItalicDecorator extends TextDecorator {
    render(): string {
        return `<i>${super.render()}</i>`;
    }
}