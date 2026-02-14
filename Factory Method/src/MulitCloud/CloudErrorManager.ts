import { ICloudServer } from "./cloud-server.interface";
import { CloudError } from "./CloudError";
import { CloudManager } from "./CloudManager";

export class CloudErrorManager extends CloudManager {
    createServer(): ICloudServer {
        return new CloudError();
    }
}