import { Sender } from "../interfaces/sender.interface";

// concrete class
export class SmsApiService implements Sender {
    connect(): string {
        return 'SMS API service connected.';
    }
}