import { IHeaderBuilder } from "../interfaces/header-builder.interface";
import { Header } from "../types/header.type";

export class HeaderBuilder implements IHeaderBuilder {
    private showHeader = false;
    private logoUrl?: string;
    private headertext?: string;

    constructor() {}

    setHeadertext(headerText: string): this {
        this.headertext = headerText;
        return this;
    }

    setLogoUrl(url?: string): this {
        this.logoUrl = url;
        return this;
    }

    setShowHeader(show: boolean): this {
        this.showHeader = show;
        return this;
    }

    build(): Header {
        this.validateHeaderData();
        return {
            showHeader: this.showHeader,
            headerText: this.headertext,
            logoUrl: this.logoUrl,
        };
    }

    private validateHeaderData() {
        if (!this.showHeader) {
            return;
        }

        if (!this.logoUrl || !this.logoUrl?.trim().length) {
            throw new Error('Logo URL is required!');
        }

        if (!this.headertext || !this.headertext?.trim().length) {
            throw new Error('Header text is required!');
        }
    }
}