import { ArtdecoChair } from "../artdeco/ArtdecoChair";
import { ArtdecoSofa } from "../artdeco/ArtdecoSofa";
import { ArtdecoTable } from "../artdeco/ArtdecoTable";
import { IChair } from "../interfaces/chair.interface";
import { ISofa } from "../interfaces/sofa.interface";
import { ITable } from "../interfaces/table.interface";
import { IFornitureFactory } from "./interface/forniture-factory.interface";

// concrete factory
export class ArtdecoFactory implements IFornitureFactory {
    createChair(): IChair {
        return new ArtdecoChair();
    }

    createSofa(): ISofa {
        return new ArtdecoSofa();
    }

    createTable(): ITable {
        return new ArtdecoTable();
    }
}