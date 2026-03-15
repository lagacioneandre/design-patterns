export class SMTPService {
    private receiver!: string;
    private subject!: string;
    private content!: string;

    setReceiver(email: string) {
        this.receiver = email;
    }

    setHeader(text: string) {
        this.subject = text;
    }

    setMessageContent(content: string) {
        this.content = content;
    }

    dispatch() {
        console.log(`Receiver: ${this.receiver}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Content: ${this.content}`);
        console.log('--- Email enviado ---');
    }
}