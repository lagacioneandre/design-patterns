import { Checkbox } from "../interfaces/checkbox.inteface";

// classe concreta
export class WindowsCheckbox implements Checkbox {
    paint(): string {
        return 'Renderizando uma caixa de selecao estilo windows';
    }
}
