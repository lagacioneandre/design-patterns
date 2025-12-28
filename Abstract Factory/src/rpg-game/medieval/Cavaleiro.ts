import { Personagem } from "../interfaces/personagem.interface";

// concrete class
export class Cavaleiro implements Personagem {
    setName(): string {
        return 'Cavaleiro';
    }
}