import { Legendas } from "../interfaces/legendas.interface";
import { QualidadeVideo } from "../interfaces/qualidade-video.interface";
import { VideoPlayer } from "../interfaces/video-player.interface";
import { PremiumPlanLegenda } from "../premium-plan/PremiumPlanLegenda";
import { PremiumPlanQualidadeVideo } from "../premium-plan/PremiumPlanQualidadeVideo";
import { PremiumPlanVideoPlayer } from "../premium-plan/PremiumPlanVideoPlayer";
import { PlanoFactory } from "./interface/plano-factory.interface";

// concrete factory
export class PremiumPlanFacotry implements PlanoFactory {
    criarLegendas(): Legendas {
        return new PremiumPlanLegenda();
    }

    criarQualidadeVideo(): QualidadeVideo {
        return new PremiumPlanQualidadeVideo();
    }

    criarVideoPlayer(): VideoPlayer {
        return new PremiumPlanVideoPlayer();
    }
}