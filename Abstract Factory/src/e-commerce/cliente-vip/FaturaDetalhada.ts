import { IFatura } from "../interfaces/fatura.interface";

// concrete class
export class FaturaDetalhada implements IFatura {
    gerar(): string {
        return 'Gerando a fatura detalhada com beneficio VIP.';
    }
}