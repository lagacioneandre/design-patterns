import { Button } from "../interfaces/button.interface";

// classe concreta
export class WindowsButton implements Button {
    paint(): string {
        return 'Renderizando um botao estilo windows';
    }
}
