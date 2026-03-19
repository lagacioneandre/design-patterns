import { Color } from "./color.interface";

// Concrete Implementor A
export class RedColor implements Color {
    applyColor(): string {
        return 'Vermelho';
    }
}