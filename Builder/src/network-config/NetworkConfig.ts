/**
 * Essa 'e o objeto final que deve ser configurado, ou seja, esse 'e o formato completo de como o objeto deve ser,
 * esse objeto nao deve ser alterado pelas classes que o implementa, isso fere o padrao builder, essas classes devem 
 * no maximo alterar os valores das propriedades que precisarem ou apenas nao implementar as propriedade que nao precisam.
 * 
 * Você deve trabalhar com as propriedades e métodos definidas no objeto NetworkConfig,
 * mas pode criar variações na representação final do objeto.
 * Em um cenário ideal do padrão Builder, o Produto (NetworkConfig) deve ser uma classe estável com todas 
 * as propriedades possíveis que poderiam ser configuradas. Você não deve alterar a estrutura do Produto (NetworkConfig) 
 * a cada nova necessidade.
 */

export class NetworkConfig {
    public urlBase = '';
    public timeoutMS = 5000;
    public cacheAtivado = false;
    public tentativasMaximas = 1;
    public tokenAuth: string | null = null;

    private constructor(urlBase: string) {
        this.urlBase = urlBase;
    }

    public static criar(urlBase: string): NetworkConfig {
        return new NetworkConfig(urlBase);
    }

    public mostrarConfig(): void {
        console.log(`\n--- Configuração de Rede ---`);
        console.log(`URL Base: ${this.urlBase}`);
        console.log(`Timeout: ${this.timeoutMS}ms`);
        console.log(`Cache: ${this.cacheAtivado ? 'ATIVO' : 'DESATIVADO'}`);
        console.log(`Retries: ${this.tentativasMaximas}`);
        console.log(`Autenticação: ${this.tokenAuth ? 'Token OK' : 'NÃO REQUERIDO'}`);
        console.log(`--------------------------\n`);
    }
}