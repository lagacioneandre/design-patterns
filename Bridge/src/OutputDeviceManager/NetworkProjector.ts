import { VideoDevice } from "./video-device.interface";

export class NetworkProjector implements VideoDevice {
    deviceName = 'Projetor';

    renderFrame(data: string): void {
        console.log(`Enviando via wi-fi para o ${this.deviceName}: [${data}]`);
    }

    setQuality(level: number): void {
        console.log(`Quality seted to ${level}`);
    }
}