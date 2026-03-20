import { VideoDevice } from "./video-device.interface";
import { VideoPlayer } from "./VideoPlayer";

export class PremiumPlayer extends VideoPlayer {
    constructor(videoDevice: VideoDevice) {
        super(videoDevice);
    }

    play(content: string): void {
        this.videoDevice.setQuality(1080);
        this.videoDevice.renderFrame(content);
    }

    rewind() {
        
        console.log(`Voltando 10 segundos no [${this.videoDevice.deviceName}]...`)
    }
}