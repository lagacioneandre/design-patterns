import { DataStream } from "./data-stream.interface";

export class BaseStream implements DataStream {
    process(data: string): string {
        return data;
    }
}