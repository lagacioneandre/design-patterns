// concrete creator

import { EmailNotification } from "./EmailNotification";
import { INotification } from "./notification.interface";
import { NotificationFactory } from "./NotificationFactory";

export class EmailFactory extends NotificationFactory {
    createNotification(): INotification {
        return new EmailNotification();
    }
}