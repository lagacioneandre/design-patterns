import { AmazonEC2 } from "./AmazonEC2";
import { ICloudServer } from "./cloud-server.interface";
import { CloudManager } from "./CloudManager";

export class AWSManager extends CloudManager  {
    createServer(): ICloudServer {
        return new AmazonEC2();
    }
}