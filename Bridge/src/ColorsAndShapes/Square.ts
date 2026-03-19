import { Color } from "./color.interface";
import { Shape } from "./Shape";

// Refined abstraction B
export class Square extends Shape {
    constructor(color: Color, private side: number) {
        super(color);
    }

    draw(): void {
        console.log(`Desenhando um quadrado de lado ${this.side} na cor ${this.color.applyColor()}`);
    }
}