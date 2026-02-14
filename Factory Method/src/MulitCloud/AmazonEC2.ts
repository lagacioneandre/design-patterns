import { ICloudServer } from "./cloud-server.interface";
import { Status } from "./status.type";

export class AmazonEC2 implements ICloudServer {
    private status: Status = 'PENDING';

    connect(): boolean {
        console.log('AmazonEC2 connected.');
        this.status = 'RUNNING';
        return true;
    }

    getStatus(): Status {
        return this.status;
    }

    launch(): void {
        this.status = 'PENDING';
        const randomNumber = Math.random();

        if (randomNumber < 0.2) {
            console.log(`Launch server: ${this.status}`);
            this.status = 'ERROR';
            return;
        }

        this.status = 'RUNNING';
        console.log(`Launch server: ${this.status}`);
    }
}