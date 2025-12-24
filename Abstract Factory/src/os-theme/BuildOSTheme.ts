import { GUIFactory } from "./factories/interface/gui-factory.interface";
import { Button } from "./interfaces/button.interface";
import { Checkbox } from "./interfaces/checkbox.inteface";
import { RadioButton } from "./interfaces/radiobutton.interface";

/*
    classe application
    O cliente que utiliza a abstract factory e os abstract products,
    eles nao conhecem as classes concretas dos produtos ou da fabrica.
    Interage apenas com as interfaces
*/
export class BuildOSTheme {
    private _factory: GUIFactory;
    private _button: Button | null;
    private _checkbox: Checkbox | null;
    private _radioButton: RadioButton | null; // <<< NOVO: Referencia de radio button

    /*
        O construtor do cliente recebe uma instancia da classe abstrata
        Isso permite que a applicacao seja configurada com diferentes familias de UI.
        O parametro factory 'e a fabrica concreta a ser utilizada para criar os elementos de UI
    */
    constructor (factory: GUIFactory) {
        this._factory = factory;
        this._button = null;
        this._checkbox = null;
        this._radioButton = null; // <<< Inicializa a nova referencia
    }

    /**
     * Criar os elementos da UI (Botao e caixa de selecao) usando a fabrica configuada
     */
    createUI(): void {
        this._button = this._factory.creatButton();
        this._checkbox = this._factory.creatCheckbox();
        this._radioButton = this._factory.createRadioButton(); // <<< NOVO: Cria  o RadioButton
        console.log('Elementos UI criados')
    }

    run(): void {
        if (this._button && this._checkbox && this._radioButton) { // <<< foi necessario atualizar a condicao
            console.log(this._button.paint());
            console.log(this._checkbox.paint());
            console.log(this._radioButton.paint()); // <<< Interage com o RadioButton
        } else {
            console.log('UI nao criada. Chame CreatUI() primeiro')
        }
    }
}

