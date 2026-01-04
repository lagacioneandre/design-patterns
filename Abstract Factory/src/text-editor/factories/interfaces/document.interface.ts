import { Body } from "../../interfaces/body.interface";
import { Footer } from "../../interfaces/footer.interface";
import { Header } from "../../interfaces/header.interface";

// abstract factory
export interface Document {
    header(): Header;
    body(): Body;
    footer(): Footer;
}