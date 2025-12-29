import { NotificationSystem } from "./factories/interface/notification-system.interface";
import { Message } from "./interfaces/message.interface";
import { Sender } from "./interfaces/sender.interface";

// client
export class SendNotification {
    private message: Message;
    private sender: Sender;

    constructor (factory: NotificationSystem) {
        this.message = factory.getMessage();
        this.sender = factory.getSender();
    }

    send() {
        console.log(this.message.message());
        console.log(this.sender.connect());
    }
}