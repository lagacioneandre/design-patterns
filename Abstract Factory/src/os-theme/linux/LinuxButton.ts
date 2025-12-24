import { Button } from "../interfaces/button.interface";

// classe concreta
export class LinuxButton implements Button {
    paint(): string {
        return 'Renderizando um botao estilo Linux'
    }
}