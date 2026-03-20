import { VideoDevice } from "./video-device.interface";
import { VideoPlayer } from "./VideoPlayer";

export class BasicPlayer extends VideoPlayer {
    constructor(videoDevice: VideoDevice) {
        super(videoDevice);
    }

    play(content: string): void {
        this.videoDevice.setQuality(720);
        this.videoDevice.renderFrame(content);
    }
}