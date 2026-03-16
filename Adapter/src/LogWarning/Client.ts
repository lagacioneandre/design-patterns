import { LogWarning } from "./log-warning.interface";
import { WindowsLog } from "./WindowsLog";
import { WindowsLogAdapter } from "./WindowsLogAdapter";

class Client {
    constructor (
        private logWarning: LogWarning
    ) {}

    getLogStatus() {
        console.log('Buscando log de status...');
        this.logWarning.showWarning();
    }
}

(() => {
    const legacy = new WindowsLog();
    const adapter = new WindowsLogAdapter(legacy);
    const client = new Client(adapter);
    client.getLogStatus();
})();