import { EmailService } from "./EmailService";
import { NewEmailService } from "./new-email-service.interface";
import { SMTPService } from "./SMTPService";

class Client {
    constructor (
        private emailService: NewEmailService
    ) {}

    execute() {
        this.emailService.send('receiver@email.com', 'Email Subject', 'Email body');
    }
}

(() => {
    const legacy = new SMTPService();
    const adapter = new EmailService(legacy);
    const client = new Client(adapter);
    client.execute();
})();