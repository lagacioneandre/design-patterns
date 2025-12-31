import { VideoPlayer } from "../interfaces/video-player.interface";

// concrete class
export class BasicPlanVideoPlayer implements VideoPlayer {
    obterPlayer(): string {
        return 'Definido o player basico';
    }
}