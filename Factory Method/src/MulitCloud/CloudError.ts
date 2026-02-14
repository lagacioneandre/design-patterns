import { ICloudServer } from "./cloud-server.interface";
import { Status } from "./status.type";

export class CloudError implements ICloudServer {
    private status: Status = 'PENDING';
    
    connect(): boolean {
        console.log('CloudError connected.');
        return true;
    }

    getStatus(): Status {
        return this.status;
    }

    launch(): void {
        this.status = 'ERROR';
    }
}