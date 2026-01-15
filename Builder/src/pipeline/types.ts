/**
 * Tipos para Configuração de Pipeline CI/CD.
 */

// Tipo para variáveis globais (Map<string, string>)
export type GlobalVariables = Record<string, string>;

// Tipos de Passos (Steps)
export type StepType = 'BUILD' | 'TEST' | 'DEPLOY';

export type Step = {
    stepName: string;
    type: StepType;
    script: string;
    // Obrigatório apenas se type for 'TEST'
    coverageThreshold?: number;
}

// Tipos de Estágios (Stages)
export type Stage = {
    stageName: string;
    stageImage: string;
    steps: Step[];
}

// Tipo Final do Objeto de Configuração
export type PipelineConfigType = {
    name: string;
    baseImage: string;
    globalTimeout: number; // Com default de 3600
    globalVariables: GlobalVariables;
    stages: Stage[]; // Renomeado para 'stages' para clareza
}