import { FamilyPlanLegenda } from "../family-plan/FamilyPlanlegenda";
import { FamiltPlanQualidadeVideo } from "../family-plan/FamilyPlanQualidadeVideo";
import { FamilyPlanVideoPlayer } from "../family-plan/FamilyPlanVideoPlayer";
import { Legendas } from "../interfaces/legendas.interface";
import { QualidadeVideo } from "../interfaces/qualidade-video.interface";
import { VideoPlayer } from "../interfaces/video-player.interface";
import { PlanoFactory } from "./interface/plano-factory.interface";

// concrete factory
export class FamilyPlanFactory implements PlanoFactory {
    criarLegendas(): Legendas {
        return new FamilyPlanLegenda();
    }

    criarQualidadeVideo(): QualidadeVideo {
        return new FamiltPlanQualidadeVideo();
    }

    criarVideoPlayer(): VideoPlayer {
        return new FamilyPlanVideoPlayer();
    }
}