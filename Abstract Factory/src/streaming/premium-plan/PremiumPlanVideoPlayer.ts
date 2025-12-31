import { VideoPlayer } from "../interfaces/video-player.interface";

// concrete class
export class PremiumPlanVideoPlayer implements VideoPlayer {
    obterPlayer(): string {
        return 'Definido o player completo';
    }
}