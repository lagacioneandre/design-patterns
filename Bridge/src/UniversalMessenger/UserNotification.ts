import { Notification } from "./Notification";
import { NotificationChannel } from "./notification-channel.interface";

export class UserNotification extends Notification {
    constructor(notificationChannel: NotificationChannel, private message: string) {
        super(notificationChannel);
    }

    send(): void {
        this.notificationChannel.sendData(this.message);
    }
}