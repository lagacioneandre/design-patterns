import { VideoDevice } from "./video-device.interface"

export abstract class VideoPlayer {
    protected videoDevice: VideoDevice;

    constructor (videoDevice: VideoDevice) {
        this.videoDevice = videoDevice;
    }

    abstract play(content: string): void;
}