import { Button } from "../interfaces/button.interface";
import { Checkbox } from "../interfaces/checkbox.inteface";
import { RadioButton } from "../interfaces/radiobutton.interface";
import { LinuxButton } from "../linux/LinuxButton";
import { LinuxCheckbox } from "../linux/LinuxCheckbox";
import { LinuxRadioButton } from "../linux/LinuxRadioButton";
import { GUIFactory } from "./interface/gui-factory.interface";

// concrete factory
export class LinuxFactory implements GUIFactory {
    creatButton(): Button {
        return new LinuxButton()
    }

    creatCheckbox(): Checkbox {
        return new LinuxCheckbox()
    }

    // <<< MODIFICACAO NECESSARIA PARA O NOVO TIPO DE PRODUTO
    createRadioButton(): RadioButton {
        return new LinuxRadioButton()
    }
}