
/**
 * Abstract product
 * Esse novo produto quebra o padrao de Aberto/Fechado
 * pois o mesmo foi criado posteriormente a todas as familias ja terem sido criadas e implementadas
 */
export interface RadioButton {
    paint(): string;
}