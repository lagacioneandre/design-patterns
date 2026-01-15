import { StageBuilder } from "./StageBuilder";
import { StepType, Step } from "./types";

/**
 * StepBuilder (Nível 2): Responsável por configurar um único passo.
 * Implementa o encadeamento fluente retornando ao StageBuilder (pai).
 */
export class StepBuilder {
    private parentBuilder: StageBuilder;
    private stepName!: string;
    private type!: StepType;
    private script!: string;
    private coverageThreshold?: number;

    constructor(parentBuilder: StageBuilder) {
        this.parentBuilder = parentBuilder;
    }

    setStepName(stepName: string): this {
        if (!stepName.trim()) {
            throw new Error('Step name is required.');
        }
        this.stepName = stepName;
        return this;
    }

    setStepType(stepType: StepType): this {
        this.type = stepType;
        return this;
    }

    setScript(script: string): this {
        if (!script.trim()) {
            throw new Error('Step script is required.');
        }
        this.script = script;
        return this;
    }

    setCoverageThreshold(coverage: number): this {
        this.coverageThreshold = coverage;
        return this;
    }

    /**
     * Finaliza a construção do Step, realiza a validação do tipo 'TEST'.
     * Adiciona o Step ao StageBuilder pai e retorna o StageBuilder para continuar.
     */
    endStep(): StageBuilder {
        this.validateRequiredValues();
        this.validateCoverageThreshold();

        const step: Step = {
            stepName: this.stepName,
            type: this.type,
            script: this.script,
            coverageThreshold: this.coverageThreshold,
        };

        this.parentBuilder.addStepToList(step);
        return this.parentBuilder; // Retorna para o StageBuilder (Back-to-Master)
    }

    private validateRequiredValues() {
        if (!this.stepName || !this.stepName.trim()) {
            throw new Error('Step: stepName is required.');
        }
        if (!this.type) {
            throw new Error('Step: type is required.');
        }
        if (!this.script || !this.script.trim()) {
            throw new Error('Step: script is required.');
        }
    }

    private validateCoverageThreshold() {
        if (this.type !== "TEST") {
            // Garante que coverageThreshold não exista em tipos não-TEST
            this.coverageThreshold = undefined; 
            return;
        }

        if (this.coverageThreshold === undefined || this.coverageThreshold === null) {
            throw new Error(`Step '${this.stepName}': For type 'TEST', coverageThreshold is required.`);
        }

        if (this.coverageThreshold < 1 || this.coverageThreshold > 100) {
            throw new Error(`Step '${this.stepName}': The coverage threshold needs to be between 1 and 100.`);
        }
    }
}