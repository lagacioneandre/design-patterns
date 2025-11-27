import { IFaturaFactory } from "./factories/interface/FaturaFactory";

// client
export class ProcessarFatura {
    private factory: IFaturaFactory;
    private valor: number;

    constructor (factory: IFaturaFactory, valor: number) {
        this.factory = factory;
        this.valor = valor;
    }

    processar() {
        const fatura = this.factory.criarFatura();
        console.log(fatura.gerar());
        const pagamento = this.factory.criarMetodoPagament();
        console.log(pagamento.processar(this.valor));
    }
    
}