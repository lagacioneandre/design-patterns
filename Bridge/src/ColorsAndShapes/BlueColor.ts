import { Color } from "./color.interface";

// Concrete Implementor B
export class BlueColor implements Color {
    applyColor(): string {
        return 'Azul';
    }
}