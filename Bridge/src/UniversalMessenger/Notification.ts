import { NotificationChannel } from "./notification-channel.interface";

export abstract class Notification {
    protected notificationChannel: NotificationChannel;

    constructor(notificationChannel: NotificationChannel) {
        this.notificationChannel = notificationChannel;
    }

    abstract send(): void;
}