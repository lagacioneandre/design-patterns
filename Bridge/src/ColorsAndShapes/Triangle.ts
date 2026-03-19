import { Color } from "./color.interface";
import { Shape } from "./Shape";

// Refined Abstraction C
export class Triangle extends Shape {
    constructor(color: Color, private value: number) {
        super(color);
    }

    draw(): void {
        console.log(`Desenhando um triangulo de tamanho ${this.value} na cor ${this.color.applyColor()}`);
    }
}