import { VideoDevice } from "./video-device.interface";

export class LocalMonitor implements VideoDevice {
    deviceName = 'Monitor local';

    renderFrame(data: string): void {
        console.log(`Exibindo no ${this.deviceName}: [${data}]`);
    }

    setQuality(level: number): void {
        console.log(`Quality seted to ${level}`);
    }
}