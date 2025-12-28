import { Classe } from "../interfaces/classe.interface";

// concrete class
export class Mago implements Classe {
    setClass(): string {
        return 'Mago';
    }
}