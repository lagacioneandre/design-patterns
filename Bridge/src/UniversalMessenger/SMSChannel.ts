import { NotificationChannel } from "./notification-channel.interface";

export class SMSChannel implements NotificationChannel {
    sendData(message: string): void {
        console.log(`SMS: ${message}`);
    }
}