import { EmailMessage } from "../email/EmailMessage";
import { SmtpService } from "../email/SmtpService";
import { Message } from "../interfaces/message.interface";
import { Sender } from "../interfaces/sender.interface";
import { NotificationSystem } from "./interface/notification-system.interface";

// concrete factory
export class EmailNotificationFactory implements NotificationSystem {
    getMessage(): Message {
        return new EmailMessage();
    }

    getSender(): Sender {
        return new SmtpService();
    }
}
