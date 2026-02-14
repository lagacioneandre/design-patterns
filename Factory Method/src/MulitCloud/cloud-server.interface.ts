import { Status } from "./status.type";

export interface ICloudServer {
    connect(): boolean;
    launch(): void;
    getStatus(): Status;
}
