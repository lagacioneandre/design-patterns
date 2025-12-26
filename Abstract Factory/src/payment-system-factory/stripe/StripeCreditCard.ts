import { ICreditCard } from "../interfaces/credit-card.interface";

// concrete class
export class StripeCreditCard implements ICreditCard {
    print(): string {
        return 'Stripe credit card';
    }
}