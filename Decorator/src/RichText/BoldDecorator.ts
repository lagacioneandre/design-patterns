import { TextDecorator } from "./TextDecorator";

export class BoldDecorator extends TextDecorator {
    render(): string {
        return `<b>${super.render()}</b>`;
    }
}