import { ICloudServer } from "./cloud-server.interface";

export abstract class CloudManager {
    private tryToLaunchCount = 0;
    abstract createServer(): ICloudServer;

    startServer() {
        const server = this.createServer();
        const connection = server.connect();
        if (!connection) throw new Error('Could not possible to connect.');
        this.launchServer(server);
    }

    private launchServer(server: ICloudServer) {
        server.launch();
        const status = server.getStatus();
        if (status === 'ERROR') {
            if (this.tryToLaunchCount < 3) {
                setTimeout(() => {
                    this.tryToLaunchCount++;
                    this.launchServer(server);
                    return;
                }, 500);
            }
            throw new Error('Critical Failure: Server could not be provisioned');
        }

        if (status === 'RUNNING') console.log('Server is live and healthy!');
    }
}