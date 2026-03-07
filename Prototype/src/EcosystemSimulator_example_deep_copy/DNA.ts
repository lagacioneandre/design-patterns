// Uma class de suporte para representar dados aninhados

export class DNA {
    constructor(
        public sequence: string[],
        public complexity: number,
    ) {}

    // o DNA tambem precisa saber se clonar para garantir a profundidade
    clone(): DNA {
        return new DNA([...this.sequence], this.complexity);
    }
}