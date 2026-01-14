import { INetworkConfigBuilder } from "./network-config-builder.interface";
import { NetworkConfig } from "./NetworkConfig";

export class NetworkConfigBuilder implements INetworkConfigBuilder {
    private config: NetworkConfig;

    constructor(urlBase: string) {
        this.config = NetworkConfig.criar(urlBase);
    }

    configurarTimeout(ms: number): this {
        this.config.timeoutMS = ms;
        return this;
    }

    ativarCache(): this {
        this.config.cacheAtivado = true;
        return this;
    }

    definirTentativas(max: number): this {
        this.config.tentativasMaximas = max;
        return this;
    }

    adicionarAutenticacao(token: string): this {
        this.config.tokenAuth = token;
        return this;
    }

    build(): NetworkConfig {
        return this.config;
    }
}