## Desafio: O Sistema de Permissões de Acesso (IAM)

### Contexto
Você está criando um sistema de gerenciamento de identidades. Nele, temos:
1.  **Usuários Individuais**: Possuem permissões específicas.
2.  **Grupos**: Contêm usuários e... **outros Grupos** (hierarquia de departamentos).

O grande desafio: Uma permissão pode ser **concedida** ou **negada** em diferentes níveis da árvore.

---

### Requisitos do Desafio

#### 1. O Componente (`AccessEntity`)
* Crie uma interface `AccessEntity`.
* Deve ter o método `hasPermission(permission: string): boolean`.

#### 2. A Folha (`User`)
* Crie a classe `User`.
* Recebe no construtor o `name` e um `Set<string>` (ou Array) de permissões que ele possui explicitamente.
* O método `hasPermission` verifica se a string solicitada está no seu conjunto de permissões.

#### 3. O Composto (`Group`)
* Crie a classe `Group`.
* Mantém uma lista de `AccessEntity[]`.
* **A Regra de Ouro (Dificuldade Elevada):**
    * Um grupo pode ter "Permissões de Grupo" (ex: todos no grupo "Admin" ganham `view_reports` automaticamente).
    * O método `hasPermission(p)` do grupo deve retornar `true` se:
        1.  O grupo **diretamente** possui essa permissão. **OU**
        2.  **QUALQUER** um dos seus filhos (usuários ou subgrupos) possui essa permissão.

#### 4. O Desafio Extra (O "Bônus" de Arquiteto)
* Adicione um método chamado `countTotalUsers()` no seu Componente.
    * No `User`, ele retorna `1`.
    * No `Group`, ele retorna a soma de todos os usuários reais dentro dele e de seus subgrupos (sem contar os grupos em si, apenas as folhas).



---

### Cenário de Teste (Para validação)

1.  Crie o usuário **"Alice"** com a permissão `read`.
2.  Crie o usuário **"Bob"** com a permissão `write`.
3.  Crie um grupo chamado **"Equipe Beta"**. Adicione o **Bob** a ele.
4.  Crie um grupo chamado **"Departamento de TI"**. 
    * Adicione a **Alice** a este grupo.
    * Adicione o grupo **"Equipe Beta"** dentro do "Departamento de TI".
    * Dê ao grupo **"Departamento de TI"** a permissão `network_access`.

---

### O que testar no console?
1.  `tiDepartment.hasPermission('write')` -> Deve ser `true` (porque o Bob, que está no subgrupo, tem).
2.  `tiDepartment.hasPermission('read')` -> Deve ser `true` (porque a Alice tem).
3.  `tiDepartment.hasPermission('network_access')` -> Deve ser `true` (porque o grupo tem).
4.  `tiDepartment.countTotalUsers()` -> Deve retornar `2`.
5.  `alice.hasPermission('write')` -> Deve ser `false`.

---

### Por que este nível é mais difícil?
Aqui a recursão não é apenas matemática (`+`), ela é **lógica** (`||`). Além disso, o método `countTotalUsers` obriga você a pensar em como extrair informações diferentes da mesma estrutura de árvore.

**Prepare o código e cuidado para não entrar em loop infinito! Quando estiver pronto, mande aqui.**