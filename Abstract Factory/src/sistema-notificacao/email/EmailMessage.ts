import { Message } from "../interfaces/message.interface";

// concrete class
export class EmailMessage implements Message {
    message(): string {
        return 'HTML email message.';
    }
}