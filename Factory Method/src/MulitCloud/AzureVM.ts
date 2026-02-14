import { ICloudServer } from "./cloud-server.interface";
import { Status } from "./status.type";

export class AzureVM implements ICloudServer {
    private status: Status = 'PENDING';

    connect(): boolean {
        console.log('AzureVM connected.');
        return true;
    }

    getStatus(): Status {
        return this.status;
    }

    launch(): void {
        this.status = 'PENDING';
        console.log(`Launch server: ${this.status}`);

        setTimeout(() => {
            this.status = 'RUNNING';
            console.log(`Launch server: ${this.status}`);
        }, 1000);
    }
}