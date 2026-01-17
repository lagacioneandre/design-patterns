import { BodyConfig } from "./interfaces/body-config.interface";
import { FooterConfig } from "./interfaces/footer-config.interface";
import { Formato } from "./interfaces/formato.type";
import { HeaderConfig } from "./interfaces/herader-config.interface";
import { IRelatorioBuilder } from "./interfaces/relatorio-builder.interface";
import { Relatorio } from "./Report";

export class RelatorioBuilder implements IRelatorioBuilder, HeaderConfig, BodyConfig, FooterConfig {
    private relatorio: Relatorio;
    private _titulo = 'Relatorio padrao';
    private _formato: Formato = 'texto';

    constructor() {
        this.relatorio = Relatorio.criarVazio();
    }

    construirHeader(titulo: string, incluirLogo: boolean): IRelatorioBuilder {
        this.definirTitulo(titulo);
        this.incluirLogo(incluirLogo);
        return this;
    }

    construirBody(formato: Formato, incluirEstatistica: boolean): IRelatorioBuilder {
        this.definirFormato(formato);
        this.incluirResumosEstatisticos(incluirEstatistica);
        return this;
    }

    construirFooter(textoRodape: string, incluirData: boolean): IRelatorioBuilder {
        this.definirRodape(textoRodape);
        this.incluirDataGeracao(incluirData);
        return this;
    }

    definirTitulo(titulo: string): void {
        this._titulo = titulo;
        this.relatorio.adicionarParte(`Titulo: ${titulo}`);
    }

    incluirLogo(status: boolean): void {
        if (status)
                this.relatorio.adicionarParte(`Status: Logo da empresa incluida`);
    }

    definirFormato(formato: Formato): void {
        this._formato = formato;
        this.relatorio.adicionarParte(`Corpo: Formato ${formato.toUpperCase()}`);
    }

    incluirResumosEstatisticos(status: boolean): void {
        if (status)
            this.relatorio.adicionarParte(`Corpo: Resumo estatistico incluido.`);
    }

    definirRodape(texto: string): void {
        this.relatorio.adicionarParte(`Rodape: ${texto}`);
    }

    incluirDataGeracao(status: boolean): void {
        if (status)
            this.relatorio.adicionarParte(`Rodape: Gerado em ${new Date().toLocaleDateString('pt-BR')}`);
    }

    obterRelatorio(): Relatorio {
        return this.relatorio;
    }
}