import { IFooterBuilder } from "../interfaces/footer-builder.interface";
import { Footer } from "../types/footer.type";

export class FooterBuilder implements IFooterBuilder {
    private showFooter = false;
    private footerTemplate?: string;

    constructor() {}

    setFooterTemplate(footerTemplate?: string): this {
        this.footerTemplate = footerTemplate;
        return this;
    }

    setShowFooter(showFooter: boolean): this {
        this.showFooter = showFooter;
        return this;
    }

    build(): Footer {
        this.validateFooterData()
        return {
            showFooter: this.showFooter,
            footerTemplate: this.footerTemplate
        };
    }

    validateFooterData() {
        if (!this.showFooter) {
            return;
        }

        if (!this.footerTemplate || !this.footerTemplate?.trim().length) {
            throw new Error('Footer template is required!');
        }
    }
}