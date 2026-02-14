### Desafio: Orquestrador de Servidores Multi-Cloud

**Cenário:**
Sua empresa utiliza vários provedores de nuvem (AWS e Azure). Cada provedor tem sua própria forma de instanciar e verificar o status de um servidor. O seu sistema deve ser capaz de "provisionar" um servidor e garantir que ele esteja online. Se o servidor falhar ao iniciar, o orquestrador deve tentar uma estratégia de **re-tentativa (retry)**.

**Objetivo:**
Implementar o Factory Method onde a classe abstrata gerencia o **ciclo de vida** do servidor, enquanto as subclasses resolvem as particularidades de cada provedor.

---

### Requisitos Técnicos

#### 1. O Produto (`ICloudServer`)

A interface deve definir:

* `connect(): boolean`: Simula a conexão com a infraestrutura.
* `launch(): void`: Inicia o processo de boot do servidor.
* `getStatus(): 'PENDING' | 'RUNNING' | 'ERROR'`: Retorna o estado atual.

#### 2. Produtos Concretos

* **`AmazonEC2`**: No `launch()`, ele tem 20% de chance de cair em estado `ERROR` (simulando falha de hardware).
* **`AzureVM`**: No `launch()`, ele sempre começa como `PENDING` e você precisará de uma lógica para "mudar" o estado para `RUNNING`.

#### 3. O Criador Abstrato (`CloudManager`)

Aqui o nível sobe. O método `deployServer()` deve:

1. Chamar o Factory Method `createServer()`.
2. Tentar o `connect()`.
3. Se conectado, chamar `launch()`.
4. **Lógica de Monitoramento (O Diferencial):** Você deve implementar um pequeno laço (loop) que verifica o `getStatus()`.
* Se o status for `ERROR`, o `CloudManager` deve tentar dar o `launch()` novamente (máximo de 3 tentativas).
* Se após 3 tentativas o status continuar `ERROR`, lançar uma exceção: *"Critical Failure: Server could not be provisioned"*.


5. Se o status chegar a `RUNNING`, imprimir: *"Server is live and healthy!"*.

#### 4. Criadores Concretos

* **`AWSManager`** e **`AzureManager`**: Devem instanciar seus respectivos servidores.

#### 5. O Cliente

O cliente deve tentar provisionar um servidor de cada nuvem e lidar com as possíveis falhas críticas de infraestrutura usando o `try/catch` que você já domina.

---