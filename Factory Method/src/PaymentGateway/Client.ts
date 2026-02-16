import { MercadoPagoGateway } from "./MercadoPagoGateway";
import { PaymentGateway } from "./PaymentGateway";
import { PayPalGateway } from "./PayPalGateway";
import { PayPalGatewayWithoutAuthentication } from "./PayPalGatewayWithoutAuthentication";
import { StripeGateway } from "./StripeGateway";

class Client {
    execute(factory: PaymentGateway, amount: number) {
        try {
            console.log(`Payment process started: Total amount ${amount}`);
            factory.executePayment(amount);
        } catch (error: any) {
            console.error(error.message)    
        }
    }
}

(() => {
    const client = new Client();
    const stripeGateway = new StripeGateway();
    const payPalGateway = new PayPalGateway();
    const mercadoPagoGateway = new MercadoPagoGateway();
    client.execute(stripeGateway, 100);
    client.execute(payPalGateway, 200);
    client.execute(mercadoPagoGateway, 300);

    // should throw error because the amount is zero
    client.execute(stripeGateway, 0);

    // should throw authentication error
    const payPalGatewayWithoutAuthentication = new PayPalGatewayWithoutAuthentication();
    client.execute(payPalGatewayWithoutAuthentication, 100);
})();
