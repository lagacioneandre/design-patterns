import { Personagem } from "../interfaces/personagem.interface";

// concrete class
export class Androide implements Personagem {
    setName(): string {
        return 'Androide';
    }
}