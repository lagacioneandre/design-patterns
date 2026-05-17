// O Flyweight (Pesado e Imutavel)

export class ImageFlyweight {
    constructor(
        public readonly filename: string,
        public readonly data: Buffer
    ) {
        console.log(`[Flyweight] Memoria alicada para ${filename}`);
    }
}