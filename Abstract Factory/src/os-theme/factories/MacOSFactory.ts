import { Button } from "../interfaces/button.interface";
import { Checkbox } from "../interfaces/checkbox.inteface";
import { RadioButton } from "../interfaces/radiobutton.interface";
import { MacOSButton } from "../macOS/MacOSButton";
import { MacOSCheckbox } from "../macOS/MacOSCheckbox";
import { MacOSRadioButton } from "../macOS/MacOSRadioButton";
import { GUIFactory } from "./interface/gui-factory.interface";

// Concrete factory
export class MacOSFactory implements GUIFactory {
    creatButton(): Button {
        return new MacOSButton();
    }

    creatCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
    
    // <<< MODIFICACAO NECESSARIA PARA O NOVO TIPO DE PRODUTO
    createRadioButton(): RadioButton {
        return new MacOSRadioButton()
    }
}