import { Button } from "../../interfaces/button.interface";
import { Checkbox } from "../../interfaces/checkbox.inteface";
import { RadioButton } from "../../interfaces/radiobutton.interface";

/**
 * abstract factory (interface para a fabrica)
 * 
 * A adicao de "createRadioButton()" AQUI 'e a principal area onde o OCP 'e violadp
 * no padrao Abstract Factory quando um NOVO TIPO de produto 'e introduzido.
 * Todas as implementacoes existente de GUIFactory prrecisarao ser modificadas.
 * Ou seja, as fabricas existentes nao estavam "fechadas para modificacao" para acomodar um novo tipo de produto
 */
export interface GUIFactory {
    creatButton(): Button;
    creatCheckbox(): Checkbox;
    createRadioButton(): RadioButton; // <<<< MODIFICACO NECESSARIA PARA O NOVO TIPO DE PRODUTO
}
