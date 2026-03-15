import { NewEmailService } from "./new-email-service.interface";
import { SMTPService } from "./SMTPService";

export class EmailService implements NewEmailService {
    private smtpService: SMTPService;

    constructor (smtpService: SMTPService) {
        this.smtpService = smtpService;
    }

    send(to: string, subject: string, body: string): void {
        console.log('--- Enviando email ---');
        this.smtpService.setReceiver(to);
        this.smtpService.setHeader(subject);
        this.smtpService.setMessageContent(body);
        this.smtpService.dispatch();
    }
}