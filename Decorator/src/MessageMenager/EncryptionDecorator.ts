import { StreamDecorator } from "./StreamDecorator";

export class EncryptionDecorator extends StreamDecorator {
    process(data: string): string {
        const message = super.process(data)
        return message.split('').reverse().join('');
    }
}