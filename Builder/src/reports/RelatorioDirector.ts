import { IRelatorioBuilder } from "./interfaces/relatorio-builder.interface";
import { Relatorio } from "./Report";

export class RelatoriDirector {
    criarExecutivo(builder: IRelatorioBuilder): Relatorio {
        return builder
            .construirHeader('Relatorio executivo - Visao geral', true)
            .construirBody('texto', false)
            .construirFooter('Confidencial - nao distribuir', true)
            .obterRelatorio();
    }

    criarTecnico(builder: IRelatorioBuilder): Relatorio {
        return builder
            .construirHeader('Relatorio tecnico - Dados brutos', false)
            .construirBody('tabela', true)
            .construirFooter('Uso interno', false)
            .obterRelatorio();
    }
}