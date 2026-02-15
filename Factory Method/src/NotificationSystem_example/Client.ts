import { EmailFactory } from "./EmailFactory";
import { NotificationFactory } from "./NotificationFactory";
import { SMSFactory } from "./SMSFactory";

class Client {
    appCode(factory: NotificationFactory) {
        factory.notify('Ola, este e um teste do factory method.');
    }
}

(() => {
    const client = new Client();
    console.log('App: Rodando com email...');
    client.appCode(new EmailFactory());
    console.log('\nApp: Rodando com SMS...');
    client.appCode(new SMSFactory());
})();