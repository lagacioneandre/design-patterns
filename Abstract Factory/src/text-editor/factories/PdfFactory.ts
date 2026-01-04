import { Body } from "../interfaces/body.interface";
import { Footer } from "../interfaces/footer.interface";
import { Header } from "../interfaces/header.interface";
import { BodyPDF } from "../PDF/BodyPDF";
import { FooterPDF } from "../PDF/FooterPDF";
import { HeaderPDF } from "../PDF/HeaderPDF";
import { Document } from "./interfaces/document.interface";

// concrete factory
export class PdfFactory implements Document {
    header(): Header {
        return new HeaderPDF();
    }

    body(): Body {
        return new BodyPDF();
    }

    footer(): Footer {
        return new FooterPDF();
    }
}