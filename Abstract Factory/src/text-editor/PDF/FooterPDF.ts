import { Footer } from "../interfaces/footer.interface";

// abstract product
export class FooterPDF implements Footer {
    corpyright(): string {
        return 'Footer do documento em PDF.';
    }
}