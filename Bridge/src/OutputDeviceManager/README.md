## Desafio: O Gerenciador de Dispositivos de Saída (Output Device Manager)

### Contexto
Você está desenvolvendo um software de edição de vídeo. O software tem diferentes **controles de reprodução** (Abstrações): um **Player Simples** (com Play/Pause) e um **Player Avançado** (que tem Play, Pause e um modo "Rewind" que volta 10 segundos).

Esses players devem funcionar em diferentes **Hardwares de Saída** (Implementações): um **Monitor Local** e um **Projetor de Rede**. Cada hardware tem sua própria forma de processar o sinal de vídeo.

---

### Requisitos do Desafio

#### 1. O Implementador (VideoDevice)
*   Crie a interface `VideoDevice`.
*   Métodos necessários: `renderFrame(data: string): void` e `setQuality(level: number): void`.
*   Implemente dois dispositivos:
    *   **LocalMonitor:** No `renderFrame`, ele imprime "Exibindo no Monitor Local: [data]".
    *   **NetworkProjector:** No `renderFrame`, ele imprime "Enviando via Wi-Fi para o Projetor: [data]".

#### 2. A Abstração (VideoPlayer)
*   Classe abstrata `VideoPlayer` que contém a ponte para `VideoDevice`.
*   Método abstrato `play(content: string): void`.

#### 3. Abstrações Refinadas (Tipos de Player)
*   **BasicPlayer:** O método `play` apenas renderiza o frame com qualidade 720.
*   **PremiumPlayer:** 
    *   O método `play` renderiza o frame com qualidade 1080.
    *   Adicione um método exclusivo `rewind()`, que imprime "Voltando 10 segundos no [Nome do Dispositivo]...".

---

### Cenário de Teste (Para validação)

1.  Instancie um **Monitor Local**.
2.  Crie um **BasicPlayer** conectado a esse monitor e execute o `play("Filme A")`.
3.  Instancie um **Projetor de Rede**.
4.  Crie um **PremiumPlayer** conectado ao projetor.
5.  Execute o `play("Filme B")` e, em seguida, chame o método `rewind()`.

---

### O que este desafio testa?
Este desafio força você a lidar com **funcionalidades extras na Abstração Refinada** (`rewind`) que dependem da implementação base, mas que não existem em todas as abstrações. Isso mostra como a "Ponte" permite que você tenha objetos mais complexos (Premium) sem precisar criar uma versão "Premium" específica para cada hardware do mercado.

**Dica de Ouro:** No `PremiumPlayer`, você pode acessar o dispositivo protegido para realizar operações específicas dentro do `rewind`.