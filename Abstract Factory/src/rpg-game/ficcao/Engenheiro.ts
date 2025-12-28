import { Classe } from "../interfaces/classe.interface";

// concrete class
export class Engenheiro implements Classe {
    setClass(): string {
        return 'Engenheiro';
    }
}