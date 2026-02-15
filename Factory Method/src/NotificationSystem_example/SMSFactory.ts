// concrete creator

import { INotification } from "./notification.interface";
import { NotificationFactory } from "./NotificationFactory";
import { SMSNotification } from "./SMSNotification";

export class SMSFactory extends NotificationFactory {
    createNotification(): INotification {
        return new SMSNotification();
    }
}