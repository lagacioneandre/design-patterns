## Desafio: O Simulador de Ecossistemas Galácticos

### Contexto

Você está desenvolvendo um simulador onde cientistas podem criar planetas. Como configurar cada detalhe de um planeta (atmosfera, biomas, lista de espécies) é um processo exaustivo, o sistema deve permitir que um cientista use um **Planeta Modelo** e o clone para realizar experimentos paralelos.

### O Problema

Se o cientista clonar um planeta e adicionar uma nova espécie à lista de biomas, essa espécie **não pode** aparecer no planeta original. Além disso, cada planeta tem um núcleo térmico que possui uma temperatura e composição; se a temperatura do núcleo de um clone explodir, o original deve permanecer estável.

### Requisitos do Desafio

1. **Interface `Prototype`:** Defina um contrato que obrigue a implementação de um método de cópia profunda.
2. **Classe `Atmosfera`:** Deve conter propriedades como `composicao` (string) e `densidade` (number).
3. **Classe `Planeta` (O Protótipo):**
* Propriedades simples: `nome` e `raio`.
* Propriedades complexas: `atmosfera` (objeto da classe Atmosfera) e `biomas` (um **Array** de strings, ex: `['Tundra', 'Oceano']`).


4. **Método `clone()`:** Implemente a **Cópia Profunda**. Certifique-se de que o array de biomas e o objeto de atmosfera sejam instâncias novas e independentes no clone.
5. **Registro de Protótipos (`GalacticRegistry`):**
* Deve permitir registrar planetas "tipo" (ex: "Planeta Desértico", "Planeta Glacial").
* Deve permitir recuperar um clone desses planetas através de uma chave.

---

### Cenário de Teste (Para validação)

1. Crie um planeta chamado "Terra Base".
2. Configure a atmosfera para `oxigênio: 21%` e os biomas para `['Florestas', 'Montanhas']`.
3. Registre este planeta no `GalacticRegistry`.
4. Solicite um clone ao registro chamado "Terra de Experimento".
5. No clone "Terra de Experimento":
* Adicione o bioma `'Pântano'` ao array.
* Mude a densidade da atmosfera.

6. **Validação Final:** Imprima os dados do planeta original e do clone. O original **não deve** conter o bioma 'Pântano' e sua atmosfera deve permanecer intacta.

---

### Por que este desafio é importante?

Ele vai testar sua atenção aos detalhes sobre **referências de memória** em TypeScript. Arrays (`[]`) e Objetos (`{}`) são os lugares mais comuns onde bugs de "mutação fantasma" ocorrem quando o padrão Prototype é mal implementado.

**Gostaria que eu avaliasse sua implementação assim que terminar, ou prefere uma dica sobre como clonar o array de biomas de forma limpa?**