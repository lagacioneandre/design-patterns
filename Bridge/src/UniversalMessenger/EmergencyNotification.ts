import { Notification } from "./Notification";
import { NotificationChannel } from "./notification-channel.interface";

export class EmergencyNotification extends Notification {
    constructor(notificationChannel: NotificationChannel, private message: string) {
        super(notificationChannel);
    }

    send(): void {
        this.notificationChannel.sendData(`[ALERTA DE SEGURANÇA] ${this.message.toLocaleUpperCase()}`);
    }
}