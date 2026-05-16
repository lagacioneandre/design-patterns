/**
 * O Flyeight: Dados que sao compartilhados
 * Esta classe contem os dados pesados que se repetem (nome, cor, textura)
 */

export class TreeType {
    constructor(
        private name: string,
        private color: string,
        private texture: string, // Imagine que isso 'e um buffer de imagem pesado
    ) {}

    // o estado extrinsico (x, y) 'e passado por parametro
    render(x: number, y: number) {
        console.log(`Renderizando ${this.name} (${this.color} em [${x}, ${y}] com textura ${this.texture})`);
    }
}