// concrete product

import { INotification } from "./notification.interface";

export class SMSNotification implements INotification {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}