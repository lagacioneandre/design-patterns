import { Footer } from "../interfaces/footer.interface";

// concrete class
export class FooterHtml implements Footer {
    constructor (public description: string) {}

    render(): void {
        console.log(`A descricao definida é ${this.description}`);
    }
}