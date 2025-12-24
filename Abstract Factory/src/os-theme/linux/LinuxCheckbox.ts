import { Checkbox } from "../interfaces/checkbox.inteface";

// classe concreta
export class LinuxCheckbox implements Checkbox {
    paint(): string {
        return 'Renderizando uma caixa de selecao estilo Linux'
    }
}