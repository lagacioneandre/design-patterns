import { PipelineConfigBuilder } from "./PipelineConfigBuilder";
import { StepBuilder } from "./StepBuilder";
import { Step, Stage } from "./types";

/**
 * StageBuilder (Nível 1): Responsável por configurar um estágio e seus passos.
 * Lida com a herança de baseImage do Pipeline (Context Inheritance).
 */
export class StageBuilder {
    private parentBuilder: PipelineConfigBuilder;
    private baseImageContext: string; // Imagem herdada do PipelineBuilder
    
    private stageName!: string;
    private stageImage?: string; // Opcional, herda baseImageContext se ausente
    private steps: Step[] = [];

    constructor(parentBuilder: PipelineConfigBuilder, stageName: string, baseImageContext: string) {
        this.parentBuilder = parentBuilder;
        this.baseImageContext = baseImageContext;
        this.setStageName(stageName);
    }

    setStageName(stageName: string): this {
        if (!stageName.trim()) {
            throw new Error('Stage name is required.');
        }
        this.stageName = stageName;
        return this;
    }

    setStageImage(stageImage: string): this {
        this.stageImage = stageImage;
        return this;
    }

    /**
     * Inicia a configuração de um novo Step e retorna o StepBuilder aninhado.
     * O cliente deve usar endStep() para retornar aqui.
     */
    startStep(stepName: string): StepBuilder {
        const stepBuilder = new StepBuilder(this);
        stepBuilder.setStepName(stepName);
        return stepBuilder;
    }

    /**
     * Método interno usado pelo StepBuilder para adicionar o Step finalizado.
     */
    addStepToList(step: Step) {
        this.steps.push(step);
    }

    /**
     * Finaliza a construção do Stage, realiza a validação de passos.
     * Adiciona o Stage ao PipelineConfigBuilder (pai) e retorna o PipelineBuilder para continuar.
     */
    endStage(): PipelineConfigBuilder {
        this.validateRequiredValues();

        const stage: Stage = {
            stageName: this.stageName,
            // Herança de Contexto: Usa stageImage se definido, caso contrário, usa baseImageContext.
            stageImage: this.stageImage && this.stageImage.trim() ? this.stageImage : this.baseImageContext,
            steps: this.steps,
        };

        this.parentBuilder.addStageToList(stage);
        return this.parentBuilder; // Retorna para o PipelineConfigBuilder (Back-to-Master)
    }

    private validateRequiredValues() {
        if (this.steps.length === 0) {
            throw new Error(`Stage '${this.stageName}': Must have at least one step.`);
        }
    }

    /**
     * Retorna todos os Steps construídos neste Stage (usado para validação cruzada no Build final).
     */
    getSteps(): Step[] {
        return this.steps;
    }
}