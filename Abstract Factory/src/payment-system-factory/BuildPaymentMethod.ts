import { IPaymentMethods } from "./factories/interface/payment-methods.interface";
import { ICash } from "./interfaces/cash.inteface";
import { ICreditCard } from "./interfaces/credit-card.interface";

// client
export class PaymentMethods {
    private _factory: IPaymentMethods;
    private _cashPayment: ICash;
    private _creditCardPayment: ICreditCard;

    constructor (factory: IPaymentMethods) {
        this._factory = factory;
        this._cashPayment = this._factory.buildCashPayment();
        this._creditCardPayment = this._factory.buildCreditCardPayment();
    }

    cash() {
        return this._cashPayment.print();
    }

    creditCard() {
        return this._creditCardPayment.print();
    }
}