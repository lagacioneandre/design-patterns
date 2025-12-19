import { Header } from "../interfaces/header.interface";

// concrete class
export class HeaderCsv implements Header {
    constructor (public title: string) {}

    render(): void {
        console.log(`O titulo do header foi renderizado com ${this.title}`);
    }
}