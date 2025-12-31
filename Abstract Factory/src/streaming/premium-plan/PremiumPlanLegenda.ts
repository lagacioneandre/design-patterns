import { Legendas } from "../interfaces/legendas.interface";

// concrete class
export class PremiumPlanLegenda implements Legendas {
    definirLegenda(): string[] {
        return ['Portugues', 'Ingles', 'Espanhol'];
    }
}