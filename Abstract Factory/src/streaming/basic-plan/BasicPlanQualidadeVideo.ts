import { QualidadeVideo } from "../interfaces/qualidade-video.interface";

// concrete class
export class BasicPlanQualidadeVideo implements QualidadeVideo {
    definirQualidade(): string {
        return 'A qualidade do video foi definida como 480p.';
    }
}