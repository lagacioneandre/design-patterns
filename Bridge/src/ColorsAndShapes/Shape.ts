// Abstraction

import { Color } from "./color.interface";

export abstract class Shape {
    // Essa 'e a PONTE (Bridge) para a implementacao de cor
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): void;
}