/**
 * O Contexto (Estao extrinseco)
 * Esta 'e a classe "leve" que o cliente usara aos milhares. ela apenas aponta para o Flyweight
 * O Contexto: Contem apenas o que 'e UNICO para cada arvore
 */

import { TreeType } from "./TreeType";

export class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType, // Referencia ao objeto compartilhado
    ) {}

    draw() {
        this.type.render(this.x, this.y);
    }
}