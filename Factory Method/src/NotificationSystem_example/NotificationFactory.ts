// abstract class

/**
 * o segredo 'e a classe abstrata nao sabe qual notificacao sera criada,
 * ela apenas define o metodo onde a criacao vai acontecer.
 */

import { INotification } from "./notification.interface";

export abstract class NotificationFactory {
    // Este 'e o factory method
    abstract createNotification(): INotification;

    // Logica de negocio que usa o objeto criado
    notify(message: string) {
        const notification = this.createNotification();
        notification.send(message);
    }
}