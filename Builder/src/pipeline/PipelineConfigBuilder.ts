import { PipelineConfig } from "./PipelineConfig";
import { StageBuilder } from "./StageBuilder";
import { GlobalVariables, Stage, PipelineConfigType, Step } from "./types";

/**
 * PipelineConfigBuilder (Mestre): Responsável por configurar o pipeline e executar 
 * validações cruzadas complexas no momento da construção final.
 */
export class PipelineConfigBuilder {
    private name!: string;
    private baseImage!: string;
    // Padrão do requisito: Timeout padrão se não for definido
    private globalTimeout: number = 3600; 
    private globalVariables: GlobalVariables = {};
    private stages: Stage[] = [];

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setBaseImage(baseImage: string): this {
        this.baseImage = baseImage;
        return this;
    }

    setGlobalTimeout(timeout: number): this {
        this.globalTimeout = timeout;
        return this;
    }

    /**
     * Adiciona uma única variável global.
     */
    addGlobalVariable(key: string, value: string): this {
        this.globalVariables[key] = value;
        return this;
    }

    /**
     * Inicia a configuração de um novo Stage e retorna o StageBuilder aninhado.
     * Passa o contexto da baseImage para o StageBuilder.
     */
    startStage(stageName: string): StageBuilder {
        if (!this.baseImage) {
            throw new Error('Cannot start a stage: Pipeline baseImage must be defined first.');
        }
        // Passa o contexto do Builder Mestre (this) e a baseImage
        return new StageBuilder(this, stageName, this.baseImage);
    }

    /**
     * Método interno usado pelo StageBuilder para adicionar o Stage finalizado.
     */
    addStageToList(stage: Stage) {
        this.stages.push(stage);
    }

    /**
     * Constrói o PipelineConfig final, executando todas as validações globais e cruzadas.
     */
    build(): PipelineConfig {
        this.validateRequiredValues();
        this.validateStageNamesUniqueness();
        this.validateCrossContextRules();
        
        const pipelineConfig: PipelineConfigType = {
            name: this.name,
            baseImage: this.baseImage,
            globalTimeout: this.globalTimeout,
            globalVariables: this.globalVariables,
            stages: this.stages,
        };
        
        return new PipelineConfig(pipelineConfig);
    }

    private validateRequiredValues() {
        if (!this.name || !this.name.trim()) {
            throw new Error('Validação de Pipeline: O nome do pipeline é obrigatório.');
        }

        if (!this.baseImage || !this.baseImage.trim()) {
            throw new Error('Validação de Pipeline: A baseImage é obrigatória.');
        }
        
        // Timeout
        if (typeof this.globalTimeout !== 'number' || this.globalTimeout <= 0) {
             throw new Error('Validação de Pipeline: O globalTimeout deve ser um número positivo (maior que 0).');
        }

        if (this.stages.length === 0) {
            throw new Error('Validação de Pipeline: Deve haver pelo menos um Stage no pipeline.');
        }
    }

    private validateStageNamesUniqueness() {
        const names = this.stages.map(stage => stage.stageName);
        const uniqueNames = new Set(names);
        if (names.length !== uniqueNames.size) {
            throw new Error('Validação de Pipeline: Nomes de Stages devem ser únicos.');
        }
    }

    /**
     * Validação Condicional Cruzada (Cross-Context Validation).
     * Regra 1: TEST coverage (Já validado no StepBuilder, mas incluído aqui para robustez).
     * Regra 2: DEPLOY e TARGET_ENV global.
     */
    private validateCrossContextRules() {
        // Coleta todos os passos de todos os estágios
        const allSteps: Step[] = this.stages.flatMap(stage => stage.steps);
        
        const hasDeployStep = allSteps.some(step => step.type === 'DEPLOY');
        
        // Regra de Implantação (DEPLOY)
        if (hasDeployStep) {
            const targetEnv = this.globalVariables['TARGET_ENV'];
            
            if (!targetEnv) {
                throw new Error("Validação de Pipeline (DEPLOY): Variável global 'TARGET_ENV' é obrigatória se houver um passo de 'DEPLOY'.");
            }

            const validEnvs = ['staging', 'production'];
            if (!validEnvs.includes(targetEnv.toLowerCase())) {
                throw new Error(`Validação de Pipeline (DEPLOY): O valor de 'TARGET_ENV' deve ser 'staging' ou 'production', mas é '${targetEnv}'.`);
            }
        }
    }
}