// O Flyweight (Pesado e Imutável)
class ImageFlyweight {
    constructor(public readonly filename: string, public readonly data: Buffer) {
        console.log(`[Flyweight] Memória alocada para: ${filename}`);
    }
}

class ImageFactory {
    // Cache de Flyweights
    private static cache = new Map<string, ImageFlyweight>();
    
    // Controle de Concorrência: Armazena Promises em andamento
    // Isso evita que 2 chamadas simultâneas disparem 2 carregamentos do disco
    private static loadingQueue = new Map<string, Promise<ImageFlyweight>>();

    // Configuração de Gestão de Memória (Ex: Limite de 3 imagens no cache)
    private static MAX_CACHE_SIZE = 3;

    static async getImage(filename: string): Promise<ImageFlyweight> {
        // 1. Verificação de Cache (Hit)
        if (this.cache.has(filename)) {
            console.log(`[Factory] Cache Hit: ${filename}`);
            return this.cache.get(filename)!;
        }

        // 2. Sincronização de Concorrência (Evitar Duplo Carregamento)
        if (this.loadingQueue.has(filename)) {
            console.log(`[Factory] Já existe um carregamento em curso para ${filename}. Aguardando...`);
            return this.loadingQueue.get(filename)!;
        }

        // 3. Processamento com Bloqueio Lógico (Race Condition Protection)
        const loadTask = this.loadImageFromDisk(filename);
        this.loadingQueue.set(filename, loadTask);

        try {
            const image = await loadTask;
            
            // 4. Gestão de Memória (Limpeza de Cache - LRU Simples)
            if (this.cache.size >= this.MAX_CACHE_SIZE) {
                const firstKey = this.cache.keys().next().value;
                console.log(`[Memória] Cache cheio. Removendo item antigo: ${firstKey}`);
                this.cache.delete(firstKey);
            }

            this.cache.set(filename, image);
            return image;
        } finally {
            // Remove da fila de espera após concluir
            this.loadingQueue.delete(filename);
        }
    }

    private static async loadImageFromDisk(filename: string): Promise<ImageFlyweight> {
        // Simula um carregamento pesado de 2 segundos
        return new Promise((resolve) => {
            setTimeout(() => {
                const fakeBuffer = Buffer.alloc(1024 * 1024); // 1MB fake
                resolve(new ImageFlyweight(filename, fakeBuffer));
            }, 2000);
        });
    }
}