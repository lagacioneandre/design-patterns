import { IPaymentProcessor } from "./payment-processor.interface";
import { PaymentGateway } from "./PaymentGateway";
import { StripeProcessor } from "./products/StripeProcessor";

export class StripeGateway extends PaymentGateway {
    getProcessor(): IPaymentProcessor {
        return new StripeProcessor('apiKey');
    }
}