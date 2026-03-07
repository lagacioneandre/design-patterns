import { DNA } from "./DNA";
import { Prototype } from "./prototype.interface";

export class Organism implements Prototype {
    dna: DNA;

    constructor(
        public species: string,
        dnaSequence: string[],
        complexity: number,
        public position: { x: number, y: number },
    ) {
        this.dna = new DNA(dnaSequence, complexity);
    }

    // Metodo de clonagem profunda
    clone(): this {
        // 1. criamos a nova instancia
        const clone = new (this.constructor as any)(
            this.species,
            [...this.dna.sequence], // clonando o array do DNA
            this.dna.complexity,
            { ...this.position } // Clonando o objeto de posicao
        )

        // 2. se houver estados internos complexos, clonamos individualmente
        clone.dna = this.dna.clone();
        return clone;
    }

    mutate(index: number, newGene: string) {
        this.dna.sequence[index] = newGene;
    }

    display() {
        console.log(`${this.species} | DNA: ${this.dna.sequence.join('-')} | Pos: (${this.position.x},${this.position.y})`);
    }
}