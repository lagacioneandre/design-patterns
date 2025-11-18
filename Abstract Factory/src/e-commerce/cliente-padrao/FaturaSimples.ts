import { IFatura } from "../interfaces/fatura.interface";

// concrete class
export class FaturaSimples implements IFatura {
    gerar(): string {
        return 'Gerando fatura simples para cliente padrao';
    }
}