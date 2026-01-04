import { BodyHtml } from "../HTML/BodyHtml";
import { FooterHtml } from "../HTML/FooterHtml";
import { HeaderHtml } from "../HTML/HeaderHtml";
import { Body } from "../interfaces/body.interface";
import { Footer } from "../interfaces/footer.interface";
import { Header } from "../interfaces/header.interface";
import { Document } from "./interfaces/document.interface";

// concrete factory
export class HtmlFactory implements Document {
    header(): Header {
        return new HeaderHtml();
    }

    body(): Body {
        return new BodyHtml();
    }

    footer(): Footer {
        return new FooterHtml();
    }
}