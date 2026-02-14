import { AzureVM } from "./AzureVM";
import { ICloudServer } from "./cloud-server.interface";
import { CloudManager } from "./CloudManager";

export class AzureManager extends CloudManager {
    createServer(): ICloudServer {
        return new AzureVM();
    }
}