export class Relatorio {
    private partes: string[] = [];

    private constructor() {}

    static criarVazio(): Relatorio {
        return new Relatorio();
    }

    adicionarParte(parte: string) {
        this.partes.push(parte);
    }

    public imprimir() {
        console.log(`\n========================================`);
        console.log(`|         RELATÓRIO FINALIZADO         |`);
        console.log(`========================================`);
        this.partes.forEach(p => console.log(`| ${p}`));
        console.log(`========================================\n`);
    }
}