O padrão **Prototype** é um padrão de criação que, do ponto de vista arquitetural, resolve o problema de criar novos objetos duplicando instâncias existentes, em vez de criá-los do zero através de um construtor.

É o padrão da **"Clonagem Autônoma"**. Ele permite que um objeto decida como ele mesmo deve ser copiado, o que é fundamental quando o processo de criação é caro ou quando o cliente não deve conhecer os detalhes da classe concreta.

---

## 1. O Problema: O Custo da Instanciação e o Acoplamento

Existem dois cenários principais onde o `new` se torna um problema para o arquiteto:

1. **Complexidade de Configuração:** Um objeto pode ter um estado interno complexo que exige várias chamadas de métodos, consultas ao banco de dados ou cálculos pesados para ser montado. Reexecutar tudo isso para cada nova instância é ineficiente.
2. **Dependência de Subclasses:** O código cliente pode precisar de uma cópia de um objeto, mas ele só conhece a interface abstrata (ex: `Shape`). Ele não sabe se o objeto real é um `Circle` ou um `Rectangle`. Se o cliente tentar dar um `new`, ele precisará saber a classe exata, quebrando o desacoplamento.

---

## 2. Os Componentes do Padrão

* **Prototype (Interface):** Declara o método de clonagem (geralmente chamado de `clone()`).
* **Concrete Prototype:** Implementa a lógica de clonagem. Ele cria um novo objeto da sua própria classe e copia todos os valores de seus campos para o novo objeto.
* **Client:** Cria um novo objeto solicitando ao protótipo que ele se clone.

---

## 3. Cópia Rasa (Shallow Copy) vs. Cópia Profunda (Deep Copy)

Este é o ponto técnico mais crítico do padrão Prototype:

* **Shallow Copy:** Copia apenas os valores dos campos. Se o objeto contiver referências a outros objetos (como uma lista), o clone e o original compartilharão a mesma lista. Alterar a lista no clone afetará o original.
* **Deep Copy:** Copia o objeto e todos os objetos referenciados por ele recursivamente. Isso garante independência total entre o clone e o original, mas é muito mais complexo e custoso de implementar.

---

## 4. Vantagens Arquiteturais

* **Performance:** Clonar um objeto pré-configurado é quase sempre mais rápido do que instanciar um novo e reconfigurá-lo do zero.
* **Redução de Subclasses:** Em vez de ter uma fábrica para cada variação de um objeto, você pode ter um **Registro de Protótipos** (uma espécie de catálogo) com objetos pré-configurados.
* **Evita o Acoplamento:** O cliente pode criar novos objetos sem saber suas classes concretas, dependendo apenas da interface `Prototype`.

---

## 5. O Registro de Protótipos (Prototype Registry)

Em arquiteturas de sistemas, o Prototype raramente anda sozinho. Costumamos usar um **Prototype Registry** (ou Prototype Manager), que é um repositório (geralmente um *HashMap*) que armazena instâncias "modelo".

Quando o sistema precisa de um "Inimigo de Elite", ele não chama um construtor; ele pede ao Registry: `registry.get("EliteEnemy").clone()`.

---

## 6. Diferenças Cruciais: Prototype vs. Abstract Factory

* **Abstract Factory:** Armazena um conjunto de classes que serão instanciadas.
* **Prototype:** Armazena um conjunto de **objetos prontos** que serão clonados.
* Muitas vezes, uma Abstract Factory pode usar o Prototype internamente para armazenar os produtos que ela deve entregar, tornando a fábrica mais dinâmica.

---

### Conclusão Teórica

O Prototype é o padrão da eficiência e flexibilidade na criação. Ele é indispensável em motores de jogos (para spawn de entidades), sistemas de cache e em qualquer cenário onde o custo de inicialização de um objeto supera o custo de sua cópia em memória.

**Ficou clara a importância da clonagem para o desacoplamento? Agora que passamos pelos principais padrões de criação (Factory, Builder, Singleton, Prototype), gostaria de avançar para os padrões Estruturais, como o Adapter ou o Proxy?**