import { ICash } from "../interfaces/cash.inteface";
import { ICreditCard } from "../interfaces/credit-card.interface";
import { StripeCash } from "../stripe/StripeCash";
import { StripeCreditCard } from "../stripe/StripeCreditCard";
import { IPaymentMethods } from "./interface/payment-methods.interface";

// concrete factory
export class StripeFactory implements IPaymentMethods {
    buildCashPayment(): ICash {
        return new StripeCash();
    }

    buildCreditCardPayment(): ICreditCard {
        return new StripeCreditCard();
    }
}