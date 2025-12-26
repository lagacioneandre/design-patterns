import { ICash } from "../interfaces/cash.inteface";
import { ICreditCard } from "../interfaces/credit-card.interface";
import { PagseguroCash } from "../pagseguro/PagseguroCash";
import { PagseguroCreditCard } from "../pagseguro/PagseguroCreditCard";
import { IPaymentMethods } from "./interface/payment-methods.interface";

// concrete facroty
export class PagseguroFactory implements IPaymentMethods {
    buildCashPayment(): ICash {
        return new PagseguroCash();
    }

    buildCreditCardPayment(): ICreditCard {
        return new PagseguroCreditCard();
    }
}