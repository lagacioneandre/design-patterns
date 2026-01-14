import { NetworkConfig } from "./NetworkConfig";

export interface INetworkConfigBuilder {
    configurarTimeout(ms: number): this;
    ativarCache(): this;
    definirTentativas(max: number): this;
    adicionarAutenticacao(token: string): this;
    build(): NetworkConfig;
}