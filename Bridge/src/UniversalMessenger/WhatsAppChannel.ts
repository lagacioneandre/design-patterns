import { NotificationChannel } from "./notification-channel.interface";

export class WhatsAppChannel implements NotificationChannel {
    sendData(message: string): void {
        console.log(`WhatsApp: ${message}`);
    }
}