import { PipelineConfig } from "./PipelineConfig";
import { PipelineConfigBuilder } from "./PipelineConfigBuilder";
import { PipelineDirector } from "./PipelineDirector";

/**
 * Cliente: Executa as receitas do Director e trata os resultados/erros.
 */
class Client {
    
    runTests() {
        
        // 1. Teste de Pipeline Completo e Válido (Usando a Receita do Director)
        this.runTest('Full CD Pipeline (Válido)', (builder) => {
            const director = new PipelineDirector(builder);
            return director.createFullCDPipeline();
        });
        
        // 2. Teste de Pipeline Simples e Válido (Usando a Receita do Director)
        this.runTest('Simple CI Pipeline (Válido)', (builder) => {
            const director = new PipelineDirector(builder);
            return director.createSimpleCIPipeline();
        });

        // 3. Teste de Falha (Montado manualmente para demonstrar a falha de validação)
        // O Director NÃO usaria uma receita que falha, mas o Cliente pode montar uma manualmente
        // para provar que a validação do Builder Mestre funciona.
        this.runTest('Montagem Manual com Falha (TARGET_ENV ausente)', (builder) => {
            console.log('\n--- Cliente: Montagem manual para testar Falha de Validação Cruzada ---');
            return builder
                .setName('Deploy Invalido')
                .setBaseImage('node:18-alpine')
                // VARIÁVEL 'TARGET_ENV' ESTÁ AUSENTE AQUI, O QUE CAUSARÁ ERRO NO BUILD()
                .startStage('Deploy Incompleto')
                    .startStep('Deploy Step').setStepType('DEPLOY').setScript('echo deploy')
                    .endStep()
                .endStage()
                .build();
        });
        
    }

    private runTest(testName: string, recipe: (builder: PipelineConfigBuilder) => PipelineConfig) {
        try {
            const builder = new PipelineConfigBuilder();
            const config = recipe(builder);
            config.getPipelineConfig();
        } catch (error) {
            console.error(`\n[ERRO DE VALIDAÇÃO: ${testName}]`);
            // Exibe a mensagem de erro da validação do Builder
            console.error((error as Error).message); 
            console.log('------------------------------------');
        }
    }
}

// Execução
(function() {
    const client = new Client();
    client.runTests();
})();