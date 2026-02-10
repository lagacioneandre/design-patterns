## 🍔 Exercício de Prática: Padrão Command (Nível Iniciante)

### Descrição do Problema: Automação de Dispositivos de Casa Inteligente

Você está desenvolvendo um sistema simples para controlar dispositivos em uma casa inteligente. O objetivo é criar um controle remoto universal que possa emitir comandos para diferentes aparelhos sem saber detalhes sobre como cada um deles funciona.

**Seu desafio é implementar o Padrão Command para gerenciar a automação de dois dispositivos específicos:**

1.  **Lâmpada:** Pode ser ligada (`on`) ou desligada (`off`).
2.  **Termostato:** Pode aumentar (`up`) ou diminuir (`down`) a temperatura em $1^{\circ}\text{C}$.

#### Estrutura Requerida:

* **Receiver (Receptor):** Crie as classes `Light` (Lâmpada) e `Thermostat` (Termostato). Elas devem conter a lógica real para realizar as ações (ex: imprimir no console "Lâmpada acesa" ou "Temperatura aumentada para $22^{\circ}\text{C}$").
* **Command (Interface):** Crie a interface `Command` com um único método `execute()`.
* **Concrete Commands (Comandos Concretos):** Crie comandos específicos como `LightOnCommand`, `LightOffCommand`, `ThermostatUpCommand`, e `ThermostatDownCommand`. Cada um deve encapsular um Receptor e uma ação.
* **Invoker (Invocador):** Crie a classe `RemoteControl` (Controle Remoto). Esta classe deve armazenar comandos e ter um método simples como `pressButton(command)` que chama o `execute()` do comando armazenado.

O código do cliente deve demonstrar a criação dos dispositivos, a criação dos comandos para cada dispositivo e o uso do `RemoteControl` para executar essas ações, por exemplo, ligando a lâmpada e depois aumentando a temperatura.

---

**Objetivo principal:** Garantir que o `RemoteControl` (Invocador) interaja apenas com a interface `Command`, sem ter conhecimento direto sobre a Lâmpada ou o Termostato (Receptores).

Você gostaria que eu gerasse o código da solução em TypeScript, ou prefere tentar implementar a solução por conta própria primeiro?