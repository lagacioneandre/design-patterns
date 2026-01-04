import { Footer } from "../interfaces/footer.interface";

// concrete class
export class FooterHtml implements Footer {
    corpyright(): string {
        return 'Footer do documento HTML';
    }
}