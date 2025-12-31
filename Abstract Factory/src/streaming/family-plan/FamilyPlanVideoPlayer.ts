import { VideoPlayer } from "../interfaces/video-player.interface";

// concrete class
export class FamilyPlanVideoPlayer implements VideoPlayer {
    obterPlayer(): string {
        return 'Definido o video player intermediario.';
    }
}