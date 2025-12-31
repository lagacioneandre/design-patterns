import { Legendas } from "../interfaces/legendas.interface";

// concrete class
export class FamilyPlanLegenda implements Legendas {
    definirLegenda(): string[] {
        return ['Portugues'];
    }
}