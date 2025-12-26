import { ICreditCard } from "../interfaces/credit-card.interface";

// concrete class
export class PagseguroCreditCard implements ICreditCard {
    print(): string {
        return 'Pagseguro credit card';
    }
}