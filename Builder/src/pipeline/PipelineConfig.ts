import { PipelineConfigType } from "./types";

/**
 * PipelineConfig: O objeto final imutável construído pelo Builder.
 * Responsável apenas por armazenar e exibir a configuração.
 */
export class PipelineConfig {
    private readonly name: string;
    private readonly baseImage: string;
    private readonly globalTimeout: number;
    private readonly globalVariables: Record<string, string>;
    private readonly stages: PipelineConfigType['stages'];
    
    constructor(config: PipelineConfigType) {
        this.name = config.name;
        this.baseImage = config.baseImage;
        this.globalTimeout = config.globalTimeout;
        this.globalVariables = config.globalVariables;
        this.stages = config.stages;
    }

    /**
     * Exibe a configuração completa do pipeline.
     */
    getPipelineConfig() {
        console.log('\n\n=== Configuração Final do Pipeline ===');
        console.log(`Nome: ${this.name}`);
        console.log(`Imagem Base Docker: ${this.baseImage}`);
        console.log(`Timeout Global: ${this.globalTimeout} segundos`);
        
        console.log('Variáveis Globais:');
        const vars = Object.keys(this.globalVariables);
        if (vars.length > 0) {
            vars.forEach(key => {
                console.log(`   ${key}: ${this.globalVariables[key]}`);
            });
        } else {
            console.log('   Nenhuma variável global definida.');
        }

        console.log(`\nEstágios (${this.stages.length}):`);
        this.stages.forEach(stage => {
            console.log(`- Estágio: ${stage.stageName} (Imagem: ${stage.stageImage})`);
            stage.steps.forEach(step => {
                const coverage = step.coverageThreshold ? ` (Cobertura: ${step.coverageThreshold}%)` : '';
                console.log(`   > Passo: ${step.stepName} [${step.type}] - Script: "${step.script}"${coverage}`);
            });
        });
        console.log('====================================');
    }
}