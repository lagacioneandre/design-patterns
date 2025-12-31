import { Legendas } from "../interfaces/legendas.interface";

// concrete class
export class BasicPlanLegenda implements Legendas {
    definirLegenda(): string[] {
        return ['Sem legendas'];
    }
}