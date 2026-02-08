export type Bread = 'Integral' | 'Frances' | 'Brioche';

export type Meat = 'Bovina' | 'Frango' | 'Vegetal';

export type Cheese = 'Mussarela' | 'Cheddar' | 'Provolone';

export type Sauce = 'Maionese' | 'Ketchup' | 'Mostarda';

export type Additional = 'Bacon' | 'Ovo' | 'Salada';

export type SandwichType = {
    bread: Bread;
    meat: Meat;
    cheese?: Cheese;
    sauce?: Sauce;
    additional?: Additional[];
}
