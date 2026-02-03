/**
 * O Receiver (receptador): Contem a logica de negocio real
 * Ele sabe como executar as operacoes
 */

export class Document {
    private content: string;
    private history: string[] = [];

    constructor(initialContent: string = '') {
        this.content = initialContent;
        this.history.push(initialContent); // salva o estado inicial
    }

    insert(text: string, position: number) {
        this.content = this.content.slice(0, position) + text + this.content.slice(position);
        this.history.push(this.content);
        console.log(`[Documento] Insercao: "${text}" na posicao ${position}`);
    }

    delete(start: number, length: number) {
        this.content = this.content.slice(0, start) + this.content.slice(start + length);
        this.history.push(this.content);
        console.log(`[Documento] Delecao de ${length} caracteres a partir de ${start}`);
    }

    undo() {
        if (!!this.history.length) {
            this.history.pop(); // Remove o estado atual
            this.content = this.history[this.history.length - 1]; // volta para o estado anterior
            console.log(`[Documento] Acao desfeita. Conteudo atualizado`);
        } else {
            console.log(`[Documento] Nada para desfazer`);
        }
    }

    getContent(): string {
        return this.content;
    }
}