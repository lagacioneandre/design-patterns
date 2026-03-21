import { EmailChannel } from "./EmailChannel";
import { EmergencyNotification } from "./EmergencyNotification";
import { SMSChannel } from "./SMSChannel";
import { UserNotification } from "./UserNotification";
import { WhatsAppChannel } from "./WhatsAppChannel";

class Client {
    execute() {
        const emailChannel = new EmailChannel();
        const smsChannel = new SMSChannel();
        const whatsAppChannel = new WhatsAppChannel();
        const userMessage = new UserNotification(emailChannel, 'Seu boleto chegou');
        const emergencyEmailMessage = new EmergencyNotification(emailChannel, 'Tentativa de login suspeita');
        const emergencySMSMessage = new EmergencyNotification(smsChannel, 'Tentativa de login suspeita');
        const emergencyWhatsAppMessage = new EmergencyNotification(whatsAppChannel, 'Tentativa de login suspeita');
        userMessage.send();
        emergencyEmailMessage.send();
        emergencySMSMessage.send();
        emergencyWhatsAppMessage.send();
    }
}

(() => {
    new Client().execute();
})();