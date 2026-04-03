import { DataStream } from "./data-stream.interface";

export abstract class StreamDecorator implements DataStream {
    constructor(protected dataStream: DataStream) {}

    process(data: string): string {
        return this.dataStream.process(data);
    }
}