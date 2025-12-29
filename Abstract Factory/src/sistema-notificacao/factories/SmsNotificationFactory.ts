import { Message } from "../interfaces/message.interface";
import { Sender } from "../interfaces/sender.interface";
import { SmsApiService } from "../sms/SmsApiService";
import { SmsMessage } from "../sms/SmsMessage";
import { NotificationSystem } from "./interface/notification-system.interface";

// abstract factory
export class SmsNotificationFactory implements NotificationSystem {
    getMessage(): Message {
        return new SmsMessage();
    }

    getSender(): Sender {
        return new SmsApiService();
    }
}