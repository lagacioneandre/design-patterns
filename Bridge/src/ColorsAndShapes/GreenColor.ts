import { Color } from "./color.interface";

// Concrete Implementor C
export class GreenColor implements Color {
    applyColor(): string {
        return 'Verde';
    }
}