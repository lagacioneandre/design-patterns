import { RadioButton } from "../interfaces/radiobutton.interface";

/**
 * Classe concreta para um radio button estilo Windows
 * Essa nova classe esta em linha com o OCP principle para os produtos em si
 * (sao novas classes de produtos)
 */
export class WindowsRadioButton implements RadioButton {
    paint(): string {
        return 'Renderizando um botao de radio estilo windows'
    }
}