Como vimos na teoria, a cópia rasa é ideal quando queremos que os clones **compartilhem referências** a objetos que não devem ser duplicados, seja por economia de memória ou porque representam um recurso compartilhado.

---

## Desafio: O Sistema de Logística de Frota Estelar

### Contexto

Você está desenvolvendo um sistema para gerenciar uma frota de naves espaciais. Cada nave tem suas características individuais (nome, combustível), mas todas as naves de uma mesma "Classe" compartilham um **Manual de Operações** e um **Protocolo de Segurança** extremamente pesados em memória.

### O Problema

Se você tiver 10.000 naves da classe "Cargueiro", você não quer 10.000 cópias do Manual de Operações na memória. Se o Almirante atualizar uma regra no Manual de Operações da classe, **todas** as naves daquela classe devem refletir a mudança instantaneamente.

### Requisitos do Desafio

1. **Classe `SharedResources`:**
* Deve conter `manualConteudo` (string) e `codigoSeguranca` (number).
* Esta classe **não** deve ser clonada profundamente.


2. **Classe `Starship` (O Protótipo):**
* Propriedades individuais (Devem ser únicas para cada nave): `identificador` (string) e `combustivel` (number).
* Propriedade compartilhada: `recursos` (instância de `SharedResources`).


3. **Método `clone()`:**
* Implemente a **Cópia Rasa**.
* O clone deve ter seu próprio `identificador` e `combustivel`, mas **deve apontar para a mesma referência** de `recursos` que o original.


4. **O Teste de Validação:**
* Crie uma nave "Protótipo Cargueiro".
* Clone-a para criar a "Nave-01" e "Nave-02".
* Altere o `codigoSeguranca` no objeto `recursos` da "Nave-01".
* **Validação:** Verifique se a "Nave-02" e o "Protótipo" também tiveram seus códigos de segurança alterados automaticamente.



---

### Por que este desafio é importante?

Ele exercita a percepção de **Gestão de Recursos**. Um arquiteto sênior sabe que nem tudo deve ser isolado. Às vezes, o compartilhamento de estado via referência é uma estratégia poderosa para manter a consistência global e a eficiência do sistema.

**Dica de TypeScript:** Para a Shallow Copy, você pode usar o operador spread `{...this}` ou `Object.assign()`, mas lembre-se de como eles lidam com as referências de objetos aninhados.

**Quer tentar implementar essa lógica de compartilhamento ou tem alguma dúvida sobre como a Shallow Copy se comporta com o operador spread?**