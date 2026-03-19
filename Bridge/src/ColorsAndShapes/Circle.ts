import { Color } from "./color.interface";
import { Shape } from "./Shape";

// Refined Abstraction A
export class Circle extends Shape {
    constructor(color: Color, private radius: number) {
        super(color);
    }

    draw(): void {
        console.log(`Desenhando um circulo de raio ${this.radius} na cor ${this.color.applyColor()}`);
    }
}