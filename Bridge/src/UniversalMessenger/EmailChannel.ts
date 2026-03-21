import { NotificationChannel } from "./notification-channel.interface";

export class EmailChannel implements NotificationChannel {
    sendData(message: string): void {
        console.log(`Email: ${message}`);
    }
}