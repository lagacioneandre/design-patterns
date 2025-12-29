import { Sender } from "../interfaces/sender.interface";

// concrete class
export class SmtpService implements Sender {
    connect(): string {
        return 'SMTP Service connected.';
    }
}