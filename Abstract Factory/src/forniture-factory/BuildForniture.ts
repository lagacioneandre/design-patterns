import { IFornitureFactory } from "./factories/interface/forniture-factory.interface";
import { IChair } from "./interfaces/chair.interface";
import { ISofa } from "./interfaces/sofa.interface";
import { ITable } from "./interfaces/table.interface";

//client
export class BuildFOrniture {
    private _factory: IFornitureFactory;
    private _chair: IChair;
    private _sofa: ISofa;
    private _table: ITable;

    constructor (factory: IFornitureFactory) {
        this._factory = factory;
        this._chair = this._factory.createChair();
        this._sofa = this._factory.createSofa();
        this._table = this._factory.createTable();
    }

    chairDetails() {
        return `
            Cor: ${this._chair.color()}.
            Material: ${this._chair.material()}.
        `;
    }

    sofaDetails() {
        return `
            Cor: ${this._sofa.color()}.
            Tamanho: ${this._sofa.size()}.
        `;
    }

    tableDetails() {
        return `
            Largura: ${this._table.width()}.
            Comprimento: ${this._table.length()}.
        `;
    }
}