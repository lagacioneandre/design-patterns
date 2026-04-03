## Desafio: O Super Processador de Mensagens

### Contexto
Você está desenvolvendo um sistema de chat corporativo. A base do sistema é um **Protocolo de Mensagem** simples que apenas entrega o texto. No entanto, por questões de conformidade e segurança, o sistema precisa aplicar diferentes camadas de tratamento dependendo da configuração da sala de chat.

As camadas são:
1.  **Criptografia:** Transforma o texto em algo ilegível (ex: inverte a string).
2.  **Compressão:** Remove espaços em branco extras no início e no fim.
3.  **Filtro de Palavrões:** Substitui palavras proibidas por `****`.

---

### Requisitos do Desafio

#### 1. O Componente (`DataStream`)
* Crie uma interface `DataStream`.
* Ela deve ter o método `process(data: string): string`.

#### 2. O Componente Concreto (`BaseStream`)
* Crie a classe `BaseStream` que implementa `DataStream`.
* O método `process` apenas retorna o `data` exatamente como recebeu.

#### 3. O Decorador Base (`StreamDecorator`)
* Crie a classe abstrata `StreamDecorator` que implementa `DataStream`.
* Ela deve receber um `DataStream` no construtor.
* Deve delegar a chamada do `process` para o objeto interno.

#### 4. Decoradores Concretos
* **EncryptionDecorator:** No método `process`, ele deve inverter a string (ex: "abc" -> "cba") **depois** de chamar o processamento do objeto interno.
* **CompressionDecorator:** No método `process`, ele deve aplicar um `.trim()` na string **antes** de passar para o próximo nível.
* **ProfanityFilterDecorator:** No método `process`, ele deve substituir a palavra "bobo" por "****" no texto resultante.

---

### Cenário de Teste (Para validação)

1.  Crie uma mensagem base: `"  olha esse bobo  "`.
2.  Monte a seguinte pilha (Cebola):
    * Comece com o `BaseStream`.
    * Envolva-o com o `CompressionDecorator`.
    * Envolva o resultado com o `ProfanityFilterDecorator`.
    * Envolva tudo com o `EncryptionDecorator`.
3.  Execute o `process()` e veja o resultado final.

---

### O que você deve observar?
* A ordem dos decoradores importa? Tente inverter a ordem e veja se o resultado final muda.
* Note que cada classe decoradora foca **apenas em uma única tarefa** (Criptografar, Limpar ou Filtrar). Elas não sabem da existência umas das outras.

**Dica de Arquiteto:** Para inverter uma string em JS/TS rapidamente, você pode usar: `str.split('').reverse().join('')`.