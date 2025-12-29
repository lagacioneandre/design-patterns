import { Message } from "../interfaces/message.interface";

// concrete class
export class SmsMessage implements Message {
    message(): string {
        return 'SMS text message.';
    }
}