import { TextDecorator } from "./TextDecorator";

export class CodeDecorator extends TextDecorator {
    render(): string {
        return `<code>${super.render()}</code>`;
    }
}