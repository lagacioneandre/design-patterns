import { QualidadeVideo } from "../interfaces/qualidade-video.interface";

// concrete class
export class FamiltPlanQualidadeVideo implements QualidadeVideo {
    definirQualidade(): string {
        return 'A qualidade do video foi definida como 1024p.';
    }
}