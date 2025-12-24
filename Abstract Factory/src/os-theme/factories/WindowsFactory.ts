import { Button } from "../interfaces/button.interface";
import { Checkbox } from "../interfaces/checkbox.inteface";
import { RadioButton } from "../interfaces/radiobutton.interface";
import { WindowsButton } from "../windows/WindowsButton";
import { WindowsCheckbox } from "../windows/WindowsCheckbox";
import { WindowsRadioButton } from "../windows/WindowsRadioButton";
import { GUIFactory } from "./interface/gui-factory.interface";

// Concrete factory
export class WindowsFactory implements GUIFactory {
    creatButton(): Button {
        return new WindowsButton();
    }

    creatCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
        
    // <<< MODIFICACAO NECESSARIA PARA O NOVO TIPO DE PRODUTO
    createRadioButton(): RadioButton {
        return new WindowsRadioButton()
    }
}