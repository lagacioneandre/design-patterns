"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildOSTheme = void 0;
/*
    classe application
    O cliente que utiliza a abstract factory e os abstract products,
    eles nao conhecem as classes concretas dos produtos ou da fabrica.
    Interage apenas com as interfaces
*/
var BuildOSTheme = /** @class */ (function () {
    /*
        O construtor do cliente recebe uma instancia da classe abstrata
        Isso permite que a applicacao seja configurada com diferentes familias de UI.
        O parametro factory 'e a fabrica concreta a ser utilizada para criar os elementos de UI
    */
    function BuildOSTheme(factory) {
        this._factory = factory;
        this._button = null;
        this._checkbox = null;
        this._radioButton = null; // <<< Inicializa a nova referencia
    }
    /**
     * Criar os elementos da UI (Botao e caixa de selecao) usando a fabrica configuada
     */
    BuildOSTheme.prototype.createUI = function () {
        this._button = this._factory.creatButton();
        this._checkbox = this._factory.creatCheckbox();
        this._radioButton = this._factory.createRadioButton(); // <<< NOVO: Cria  o RadioButton
        console.log('Elementos UI criados');
    };
    BuildOSTheme.prototype.run = function () {
        if (this._button && this._checkbox && this._radioButton) { // <<< foi necessario atualizar a condicao
            console.log(this._button.paint());
            console.log(this._checkbox.paint());
            console.log(this._radioButton.paint()); // <<< Interage com o RadioButton
        }
        else {
            console.log('UI nao criada. Chame CreatUI() primeiro');
        }
    };
    return BuildOSTheme;
}());
exports.BuildOSTheme = BuildOSTheme;
