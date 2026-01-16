import { Footer } from "../types/footer.type";

export interface IFooterBuilder {
    setShowFooter(showFooter: boolean): this;
    setFooterTemplate(footerTemplate?: string): this;
    build(): Footer;
}