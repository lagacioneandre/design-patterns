import { IPaymentProcessor } from "./payment-processor.interface";
import { PaymentGateway } from "./PaymentGateway";
import { PayPalProcessor } from "./products/PayPalProcessor";

export class PayPalGateway extends PaymentGateway {
    getProcessor(): IPaymentProcessor {
        return new PayPalProcessor('user', 'password');
    }
}