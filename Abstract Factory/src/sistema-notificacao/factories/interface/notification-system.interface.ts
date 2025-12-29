import { Message } from "../../interfaces/message.interface";
import { Sender } from "../../interfaces/sender.interface";

// abstract factory
export interface NotificationSystem {
    getMessage(): Message;
    getSender(): Sender;
}