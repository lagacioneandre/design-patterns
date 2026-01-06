import { Pecas } from "../interfaces/pecas.interface";

// concrete class
export class TemaClassicoPecas implements Pecas {
    tipo(): string {
        return 'Pecas de madeira.';
    }
}