export interface VideoDevice {
    deviceName: string;
    renderFrame(data: string): void;
    setQuality(level: number): void;
}