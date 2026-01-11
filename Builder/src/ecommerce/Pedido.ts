// produto complexo a ser construido
export class Pedido {
    private partes: string[] = [];

    private constructor() {}

    public static criarNovo(): Pedido {
        return new Pedido();
    }

    public adicionarParte(parte: string): void {
        this.partes.push(parte);
    }

    public mostrarResultado(): void {
        console.log(`\n--- Pedido Finalizado ---`);
        this.partes.forEach(element => (
            console.log(`- ${element}`)
        ));
        console.log('-----------------\n');
    }
 }