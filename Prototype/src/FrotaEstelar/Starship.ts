import { Prototype } from "./prototype.interface";
import { SharedResources } from "./SharedResources";

export class Starship implements Prototype {
    constructor (
        public identificador: string,
        public combustivel: number,
        public recursos: SharedResources,
    ) {}

    clone(): this {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return clone;
    }

    display() {
        console.log(`
            Identificador: ${this.identificador},
            Combustivel: ${this.combustivel},
            Manual: ${this.recursos.manualConteudo},
            Codigo de seguranca: ${this.recursos.codigoSegranca}
        `);
    }
}