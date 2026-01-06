import { Pecas } from "../interfaces/pecas.interface";

// concrete class
export class TemaFantasiaPecas implements Pecas {
    tipo(): string {
        return 'Pecas de cristal.';
    }
}