import { Legendas } from "../../interfaces/legendas.interface";
import { QualidadeVideo } from "../../interfaces/qualidade-video.interface";
import { VideoPlayer } from "../../interfaces/video-player.interface";

// abstract factory
export interface PlanoFactory {
    criarVideoPlayer(): VideoPlayer;
    criarQualidadeVideo(): QualidadeVideo;
    criarLegendas(): Legendas;
}