import { Table } from "../interfaces/table.interface";

// concrete class
export class TableHtml implements Table {
    constructor (public data: string[]) {}

    render(): void {
        console.log(`Os dados recebidos foram ${this.data}`);
    }
}