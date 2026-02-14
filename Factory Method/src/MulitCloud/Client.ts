import { AWSManager } from "./AWSManager";
import { AzureManager } from "./AzureManager";
import { CloudErrorManager } from "./CloudErrorManager";
import { CloudManager } from "./CloudManager";

class Client {
    execute(factory: CloudManager) {
        try {
            console.log('Starting cloud server.');
            factory.startServer();
        } catch (error) {
            console.error((error as Error).message);
        }
    }
}

(() => {
    const client = new Client();
    const aws = new AWSManager();
    const azure = new AzureManager();
    const error = new CloudErrorManager();
    client.execute(aws);
    client.execute(azure);
    client.execute(error);
})();