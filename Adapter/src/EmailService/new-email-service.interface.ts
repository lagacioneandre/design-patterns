export interface NewEmailService {
    send(to: string, subject: string, body: string): void;
}