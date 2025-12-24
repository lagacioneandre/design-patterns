import { Button } from "../interfaces/button.interface";

// classe concreta
export class MacOSButton implements Button {
    paint(): string {
        return 'Renderizando um botao estilos macOS';
    }
}