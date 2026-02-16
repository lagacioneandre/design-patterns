import { IPaymentProcessor } from "./payment-processor.interface";
import { PaymentGateway } from "./PaymentGateway";
import { MercadoPagoProcessor } from "./products/MercadoPagoProcessor";

export class MercadoPagoGateway extends PaymentGateway {
    getProcessor(): IPaymentProcessor {
        return new MercadoPagoProcessor('token');
    }
}