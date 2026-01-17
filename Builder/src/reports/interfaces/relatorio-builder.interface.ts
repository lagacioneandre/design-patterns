import { Relatorio } from "../Report";
import { Formato } from "./formato.type";

export interface IRelatorioBuilder {
    construirHeader(titulo: string, incluirLogo: boolean): IRelatorioBuilder;
    construirBody(formato: Formato, incluirEstatistica: boolean): IRelatorioBuilder;
    construirFooter(textoRodape: string, incluirData: boolean): IRelatorioBuilder;
    obterRelatorio(): Relatorio;
}