// concrete product

import { INotification } from "./notification.interface";

export class EmailNotification implements INotification {
    send(message: string): void {
        console.log(`Enviando email: ${message}`);
    }
}