import { BasicPlanLegenda } from "../basic-plan/BasicPlanLegenda";
import { BasicPlanQualidadeVideo } from "../basic-plan/BasicPlanQualidadeVideo";
import { BasicPlanVideoPlayer } from "../basic-plan/BasicPlanVideoPlayer";
import { Legendas } from "../interfaces/legendas.interface";
import { QualidadeVideo } from "../interfaces/qualidade-video.interface";
import { VideoPlayer } from "../interfaces/video-player.interface";
import { PlanoFactory } from "./interface/plano-factory.interface";

// concrete factory
export class BasicPlanFactory implements PlanoFactory {
    criarLegendas(): Legendas {
        return new BasicPlanLegenda();
    }

    criarQualidadeVideo(): QualidadeVideo {
        return new BasicPlanQualidadeVideo();
    }

    criarVideoPlayer(): VideoPlayer {
        return new BasicPlanVideoPlayer();
    }
}