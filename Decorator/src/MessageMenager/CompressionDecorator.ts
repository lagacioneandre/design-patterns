import { StreamDecorator } from "./StreamDecorator";

export class CompressionDecorator extends StreamDecorator {
    process(data: string): string {
        const message = super.process(data)
        return message.trim();
    }
}