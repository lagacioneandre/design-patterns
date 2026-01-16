import { Header } from "../types/header.type";

export interface IHeaderBuilder {
    setShowHeader(show: boolean): this;
    setLogoUrl(url?: string): this;
    setHeadertext(headerText: string): this;
    build(): Header;
}