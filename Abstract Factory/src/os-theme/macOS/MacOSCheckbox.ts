import { Checkbox } from "../interfaces/checkbox.inteface";

// classe concreta
export class MacOSCheckbox implements Checkbox {
    paint(): string {
        return 'Renderizando uma caixa de selecao estilo macOS';
    }
}