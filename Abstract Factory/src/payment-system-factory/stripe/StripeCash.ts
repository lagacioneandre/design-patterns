import { ICash } from "../interfaces/cash.inteface";

// concrete class
export class StripeCash implements ICash {
    print(): string {
        return 'Stripe cash';
    }
}