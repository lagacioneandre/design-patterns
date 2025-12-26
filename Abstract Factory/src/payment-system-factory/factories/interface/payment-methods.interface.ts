import { ICash } from "../../interfaces/cash.inteface";
import { ICreditCard } from "../../interfaces/credit-card.interface";

// abstract factory
export interface IPaymentMethods {
    buildCashPayment(): ICash;
    buildCreditCardPayment(): ICreditCard;
}