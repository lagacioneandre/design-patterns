import { PipelineConfig } from "./PipelineConfig";
import { PipelineConfigBuilder } from "./PipelineConfigBuilder";

/**
 * PipelineDirector: Define a ordem dos passos (receitas) para construir 
 * configurações comuns e complexas usando o Builder.
 */
export class PipelineDirector {
    
    // O Director trabalha diretamente com a classe PipelineConfigBuilder
    constructor(private builder: PipelineConfigBuilder) {}

    /**
     * Receita 1: Constrói um Pipeline Válido e Completo (CI/CD)
     * Este é o pipeline padrão que inclui build, teste e deploy, 
     * garantindo a variável TARGET_ENV para passar na validação.
     */
    createFullCDPipeline(): PipelineConfig {
        console.log('--- Director: Construindo Pipeline Válido e Completo (Receita CD) ---');
        
        return this.builder
            .setName('CI/CD Pipeline Principal')
            .setBaseImage('node:20-slim')
            .setGlobalTimeout(9000)
            .addGlobalVariable('BUILD_ID', 'v1.0.0')
            .addGlobalVariable('TARGET_ENV', 'production') // NECESSÁRIO para o passo DEPLOY

            // Estágio 1: Build (Herda a baseImage do Pipeline)
            .startStage('Build')
                .startStep('Instalar Dependências').setStepType('BUILD').setScript('npm ci').endStep()
                .startStep('Compilar Código').setStepType('BUILD').setScript('npm run compile').endStep()
            .endStage() 

            // Estágio 2: Teste (Com imagem específica e validação de cobertura)
            .startStage('Testes Unitários')
                .setStageImage('jest:latest') // Imagem específica para este Stage
                .startStep('Rodar Testes').setStepType('TEST').setScript('npx jest --coverage')
                    .setCoverageThreshold(85) // Obrigatório para TEST
                .endStep()
            .endStage() 

            // Estágio 3: Deploy (Gatilho para validação de TARGET_ENV)
            .startStage('Implantação')
                .startStep('Deploy no Servidor').setStepType('DEPLOY').setScript('./deploy.sh --prod')
                .endStep()
            .endStage() 

            .build(); // Executa a construção e validações finais
    }

    /**
     * Receita 2: Constrói um Pipeline Simples de Integração Contínua (CI)
     * Não inclui o deploy final, evitando a necessidade da variável TARGET_ENV.
     */
    createSimpleCIPipeline(): PipelineConfig {
        console.log('\n--- Director: Construindo Pipeline Simples (Receita CI) ---');
        
        return this.builder
            .setName('CI Pipeline Simples')
            .setBaseImage('python:3.10-slim')
            .setGlobalTimeout(5000)
            .addGlobalVariable('VERSION', '1.0') // Variável opcional
            
            // Estágio 1: Configuração e Dependências
            .startStage('Setup')
                .startStep('Configurar Ambiente').setStepType('BUILD').setScript('pip install -r requirements.txt').endStep()
            .endStage()

            // Estágio 2: Testes
            .startStage('Testes de Unidade')
                .startStep('Executar Testes').setStepType('TEST').setScript('pytest')
                    .setCoverageThreshold(70) // Válido para TEST
                .endStep()
            .endStage()

            // O Director para aqui, resultando em um Pipeline de CI.
            .build();
    }
}